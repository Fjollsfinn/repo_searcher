import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import debounce from 'lodash.debounce';
import TextInput from './TextInput';
import DataTable from './DataTable';
import Popup from './Popup';
import Overlay from './Overlay';

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      fetchedData: [],
      isLoading: true,
      id: 'asc',
      name: 'asc',
      owner: 'asc',
      stargazers_count: 'asc',
      created_at: 'asc',
      isPopupOpen: false,
      selectedItem: null,
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.fetchData = debounce(this.fetchData, 500);
    this.handleSort = this.handleSort.bind(this);
    this.triggerPopup = this.triggerPopup.bind(this);
  }

  componentDidMount() {
    const cachedQuery = JSON.parse(localStorage.getItem('cachedQuery'));
    const cachedData = JSON.parse(localStorage.getItem('cachedData'));
    if (cachedQuery && cachedData && cachedData.length) {
      this.setState({
        fetchedData: cachedData,
        searchInput: cachedQuery,
        isLoading: false,
      });
    } else {
      this.fetchData('tetris');
    }
  }

  fetchData(topic) {
    const { searchInput } = this.state;
    if (topic) {
      fetch(`https://api.github.com/search/repositories?q=${topic}`)
        .then((blob) => blob.json())
        .then((data) => {
          this.setState({
            fetchedData: data.items,
            isLoading: false,
          }, () => {
            localStorage.setItem('cachedQuery', JSON.stringify(searchInput));
            localStorage.setItem('cachedData', JSON.stringify(data && data.items));
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      this.setState({
        isLoading: false,
        fetchedData: [],
        searchInput: '',
      });
    }
  }

  handleChangeInput(e) {
    e.persist();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      isLoading: true,
    }, this.fetchData(value));
  }

  // TODO refactor this weird function.
  handleSort(e) {
    let sortingParam; let order;
    sortingParam = e.target.dataset.sort;
    sortingParam === 'id'
    || sortingParam === 'name'
    || sortingParam === 'owner'
    || sortingParam === 'stargazers_count'
    || sortingParam === 'created_at'
      ? sortingParam = sortingParam
      : sortingParam = e.target.parentNode.dataset.sort;
    this.state[sortingParam] === 'asc' ? order = 'desc' : order = 'asc';

    function compare(item1, item2) {
      if (order === 'asc') {
        if (sortingParam === 'name') {
          if (item1[sortingParam] > item2[sortingParam]) {
            return -1;
          } if (item1[sortingParam] < item2[sortingParam]) {
            return 1;
          }
        } else if (sortingParam === 'owner') {
          if (item1[sortingParam].login > item2[sortingParam].login) {
            return -1;
          } if (item1[sortingParam].login < item2[sortingParam].login) {
            return 1;
          }
        } else if (sortingParam === 'created_at') {
          return item1[sortingParam].slice(0, 10).split('-').join('') - item2[sortingParam].slice(0, 10).split('-').join('');
        }
        return item1[sortingParam] - item2[sortingParam];
      }
      if (sortingParam === 'name') {
        if (item1[sortingParam] < item2[sortingParam]) {
          return -1;
        } if (item1[sortingParam] > item2[sortingParam]) {
          return 1;
        }
      } else if (sortingParam === 'owner') {
        if (item1[sortingParam].login < item2[sortingParam].login) {
          return -1;
        } if (item1[sortingParam].login > item2[sortingParam].login) {
          return 1;
        }
      } else if (sortingParam === 'created_at') {
        return item2[sortingParam].slice(0, 10).split('-').join('') - item1[sortingParam].slice(0, 10).split('-').join('');
      }
      return item2[sortingParam] - item1[sortingParam];
    }

    const sortedData = this.state.fetchedData.sort(compare);

    this.setState({
      [sortingParam]: order,
      fetchedData: sortedData,
    });
  }

  triggerPopup(e) {
    const clickedItemIndex = e.target.parentNode.dataset.index;
    this.setState((prevState) => ({
      isPopupOpen: !prevState.isPopupOpen,
      selectedItem: clickedItemIndex,
    }));
  }

  render() {
    const {
      isPopupOpen, selectedItem, isLoading, fetchedData, searchInput,
    } = this.state;
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <TextInput
            onChangeInput={this.handleChangeInput}
            value={searchInput}
          />
        </Grid>
        <Grid item style={{ marginTop: '2rem' }}>
          <DataTable
            data={fetchedData}
            isLoading={isLoading}
            handleSort={this.handleSort}
            triggerPopup={this.triggerPopup}
            panelState={this.state}
          />
        </Grid>
        {isPopupOpen && (
          <Popup triggerPopup={this.triggerPopup} data={fetchedData[selectedItem]} />
        )}
        {isPopupOpen && <Overlay triggerPopup={this.triggerPopup} />}
      </Grid>
    );
  }
}

export default Panel;

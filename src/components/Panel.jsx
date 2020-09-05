import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import debounce from 'lodash.debounce';
import TextInput from './TextInput';
import DataTable from './DataTable';
import Popup from './Popup';
import Overlay from './Overlay';

const initialSorting = {
  id: 'asc',
  name: 'asc',
  owner: 'asc',
  stargazers_count: 'asc',
  created_at: 'asc',
};

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      fetchedData: [],
      isLoading: true,
      sort: {
        ...initialSorting,
      },
      currentSortingParam: '',
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

  handleSort(e) {
    const { fetchedData, sort } = this.state;
    const sortingParam = e.target.value || e.target.parentNode.value;
    const order = sort[sortingParam];

    function getSortingDecision(firstItem, secondItem) {
      return firstItem > secondItem ? -1 : 1;
    }

    function compare(prevItem, nextItem) {
      const prev = prevItem[sortingParam];
      const next = nextItem[sortingParam];
      if (order === 'asc') {
        if (sortingParam === 'name') {
          return getSortingDecision(prev, next);
        } if (sortingParam === 'owner') {
          return getSortingDecision(prev.login, next.login);
        } if (sortingParam === 'created_at') {
          return new Date(prev) - new Date(next);
        }
        return prev - next;
      }
      if (sortingParam === 'name') {
        return getSortingDecision(next, prev);
      } if (sortingParam === 'owner') {
        return getSortingDecision(next.login, prev.login);
      } if (sortingParam === 'created_at') {
        return new Date(next) - new Date(prev);
      }
      return next - prev;
    }
    const sortedData = fetchedData.sort(compare);

    this.setState({
      sort: {
        ...initialSorting,
        [sortingParam]: order === 'asc' ? 'desc' : 'asc',
      },
      fetchedData: sortedData,
      currentSortingParam: sortingParam,
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
      isPopupOpen, selectedItem, isLoading, fetchedData, searchInput, sort, currentSortingParam,
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
            sort={sort}
            currentSortingParam={currentSortingParam}
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

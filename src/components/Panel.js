import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextInput from './TextInput';
import DataTable from './DataTable';
import debounce from 'lodash.debounce';

import Popup from './Popup';
import Overlay from './Overlay';

class Panel extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            fetchedData: [],
            isLoading: true,
            id: 'asc',
            name: 'asc',
            owner: 'asc',
            stargazers_count: 'asc',
            created_at: 'asc',
            isPopupOpen: false,
            selectedItem: null
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.getData = debounce(this.getData, 500)
        this.handleSort = this.handleSort.bind(this);
        this.triggerPopup = this.triggerPopup.bind(this);
    }

    componentDidMount() {
            this.getData('tetris');
    }

    handleChangeInput(e) {
        e.persist();
        const { name, value } = e.target
        this.setState({
            [name]: value,
            isLoading: true
        }, function() {
            if(this.state.searchInput) {
                this.getData(this.state.searchInput);
            }
        })
    }

    getData(topic) {
        const cachedQuery = JSON.parse(localStorage.getItem('cachedQuery'));
        const cachedData = JSON.parse(localStorage.getItem('cachedData'));
        if (cachedData && cachedQuery && topic !== cachedQuery && topic==='tetris') {
          this.setState({ 
              fetchedData: cachedData,
              searchInput: cachedQuery,
              isLoading: false
            });
          return;
        }
        fetch(`https://api.github.com/search/repositories?q=${topic}`)
            .then(blob => blob.json())
            .then(data => {
                this.setState({
                    fetchedData: data.items,
                    isLoading: false
                }, function() {
                    localStorage.setItem('cachedQuery', JSON.stringify(this.state.searchInput))
                    localStorage.setItem('cachedData', JSON.stringify(this.state.fetchedData))
                })
            })
    }

    handleSort(e) {
        let sortingParam, order, sortedData;
        sortingParam = e.target.dataset.sort
        sortingParam === 'id' || sortingParam === 'name' || sortingParam === 'owner' || sortingParam === 'stargazers_count' || sortingParam === 'created_at' ? sortingParam = sortingParam : sortingParam = e.target.parentNode.dataset.sort; 
        this.state[sortingParam] === 'asc' ? order = 'desc' : order = 'asc';

        function compare(item1, item2) {
            if(order === 'asc') {
                if (sortingParam === 'name') {
                    if (item1[sortingParam] > item2[sortingParam]) {
                        return -1
                    } else if (item1[sortingParam] < item2[sortingParam]) {
                        return 1
                    }
                } else if (sortingParam === 'owner') {
                    if (item1[sortingParam]['login'] > item2[sortingParam]['login']) {
                        return -1
                    } else if (item1[sortingParam]['login'] < item2[sortingParam]['login']) {
                        return 1
                    }
                } else if (sortingParam === 'created_at') {
                    return item1[sortingParam].slice(0,10).split('-').join('') -  item2[sortingParam].slice(0,10).split('-').join('')
                }
                return item1[sortingParam] - item2[sortingParam];
            } else {
                if (sortingParam === 'name') {
                    if (item1[sortingParam] < item2[sortingParam]) {
                        return -1
                    } else if (item1[sortingParam] > item2[sortingParam]) {
                        return 1
                    }
                } else if (sortingParam === 'owner') {
                    if (item1[sortingParam]['login'] < item2[sortingParam]['login']) {
                        return -1
                    } else if (item1[sortingParam]['login'] > item2[sortingParam]['login']) {
                        return 1
                    }
                } else if (sortingParam === 'created_at') {
                    return item2[sortingParam].slice(0,10).split('-').join('') - item1[sortingParam].slice(0,10).split('-').join('')
                }
                return item2[sortingParam] - item1[sortingParam];
            }
        }
        
        sortedData = this.state.fetchedData.sort(compare)

        this.setState({
            [sortingParam]: order,
            fetchedData: sortedData
        })
    }

    triggerPopup(e) {
        const clickedItemIndex = e.target.parentNode.dataset.index
        this.setState(prevState => {
            return {
                isPopupOpen: !prevState.isPopupOpen,
                selectedItem: clickedItemIndex
            }
        })
    }

    render() {
        return (
            <Grid container direction="column" alignItems="center">
                <Grid item>
                    <TextInput 
                        handleChangeInput={this.handleChangeInput} 
                        value={this.state.searchInput}
                    />
                </Grid>
                <Grid item style={{marginTop: '2rem'}}>
                    <DataTable 
                        data={this.state.fetchedData} 
                        isLoading={this.state.isLoading} 
                        handleSort={this.handleSort} 
                        triggerPopup={this.triggerPopup}
                        state={this.state}
                    />
                </Grid>
                {this.state.isPopupOpen && <Popup triggerPopup={this.triggerPopup} selectedItem={this.state.selectedItem} data={this.state.fetchedData} />
                }
                {this.state.isPopupOpen && <Overlay triggerPopup={this.triggerPopup} />}
            </Grid>
        )
    }
}

export default Panel;
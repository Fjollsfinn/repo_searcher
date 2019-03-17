import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from './Input';
import DataTable from './DataTable';
import debounce from 'lodash.debounce';

class Panel extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            fetchedData: [],
            isLoading: true,
        }
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.getData = debounce(this.getData, 500)
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

    render() {
        return (
            <Grid container direction="column" alignItems="center">
                <Grid item><Input handleChangeInput={this.handleChangeInput} value={this.state.searchInput}/></Grid>
                <Grid item style={{marginTop: '2rem'}}><DataTable data={this.state.fetchedData} isLoading={this.state.isLoading}/></Grid>
            </Grid>
        )
    }
}

export default Panel;
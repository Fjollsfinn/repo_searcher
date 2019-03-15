import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from './Input';
import DataTable from './DataTable';
import debounce from '../utils/debounce';

class Panel extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            fetchedData: [],
            isLoading: true,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://api.github.com/search/repositories?q=tetris')
            .then(blob => blob.json())
            .then(data => {
                this.setState({
                    fetchedData: data.items,
                    isLoading: false
                })
            })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, function() {
            fetch(`https://api.github.com/search/repositories?q=${this.state.searchInput}`)
            .then(blob => blob.json())
            .then(data => {
                this.setState({
                    fetchedData: data.items,
                    isLoading: false
                })
            })
        })
    }

    render() {
        return (
            <Grid container direction="column" alignItems="center">
                <Grid item><Input handleChange={this.handleChange} value={this.state.searchInput}/></Grid>
                <Grid item style={{marginTop: '2rem'}}><DataTable data={this.state.fetchedData} isLoading={this.state.isLoading}/></Grid>
            </Grid>
        )
    }
}

export default Panel;
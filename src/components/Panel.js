import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from './Input';
import DataTable from './DataTable';

class Panel extends Component {
    constructor() {
        super();
        this.state = {
            searchInput: "",
            fetchedData: [],
            isLoading: true
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://api.github.com/search/repositories?q=tetris')
            .then(blob => blob.json())
            .then(data => {
                this.setState({
                    fetchedData: data.items,
                }, function () {
                    this.setState({
                        isLoading: false
                    })
                })
            })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        }, function() {
            console.log(this.state.searchInput)
        })
    }

    render() {
        return (
            <Grid container direction="column" alignItems="center" justify="center">
                <Grid item><Input handleChange={this.handleChange} value={this.state.searchInput}/></Grid>
                <Grid item><DataTable data={this.state.fetchedData} isLoading={this.state.isLoading}/></Grid>
            </Grid>
        )
    }
}

export default Panel;
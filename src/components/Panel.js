import React, { Component } from 'react';
import '../css/panel.css';
import Grid from '@material-ui/core/Grid';
//import Input from './Input';
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
                    isLoading: false
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
            <Grid container direction="column" alignItems="center" justifyContent="Center">
                <Grid item><input className="panel__input" type="text" placeholder="Enter repozitory name . . ." value={this.state.searchInput} onChange={this.handleChange} name="searchInput" /></Grid>
                <Grid item><DataTable data={this.state.fetchedData}/></Grid>
            </Grid>
        )
    }
}

export default Panel;
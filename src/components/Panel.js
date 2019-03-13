import React, { Component } from 'react';
import '../css/panel.css';

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
                    fetchedData: data,
                    isLoading: false
                })
            })
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <input className="panel__input" type="text" placeholder="Enter repozitory name . . ." value={this.state.searchInput} onChange={this.handleChange} name="searchInput" />
        )
    }
}

export default Panel;
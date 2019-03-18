import React, { Component } from 'react';
import injectSheet from 'react-jss';
import '../css/mainPage.css';

import Panel from '../components/Panel';
import Header from '../components/Header';

class MainPage extends Component {
    render() {
        return (
            <div className="main-container">
                <Header />
                <Panel />
            </div>
        )
    }
}

export default MainPage;
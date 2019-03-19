import React, { Component } from 'react';

import Panel from '../components/Panel';
import Header from '../components/Header';


class MainPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Panel />
            </div>
        )
    }
}

export default MainPage;
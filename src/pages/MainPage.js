import React, { Component } from 'react'
import '../css/mainPage.css';

import Panel from '../components/Panel';

class MainPage extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="project-name">Github Repozitory Searcher</div>
                <div className="panel">
                    <Panel />
                </div>
            </div>
        )
    }
}

export default MainPage;
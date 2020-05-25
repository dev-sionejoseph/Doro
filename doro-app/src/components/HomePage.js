import React, { Component } from 'react'
import Timer from './Timer';
import NavBar from './NavBar';

export default class HomePage extends Component {
    render() {
        return (
            <div id="home-page-wrap">
                <NavBar />
                <Timer />
            </div>
        )
    }
}

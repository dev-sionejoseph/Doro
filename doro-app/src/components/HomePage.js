import React, { Component } from 'react'
import Timer from './Timer';

export default class HomePage extends Component {
    render() {
        return (
            <div id="home-page-wrap">
                <Timer />
            </div>
        )
    }
}

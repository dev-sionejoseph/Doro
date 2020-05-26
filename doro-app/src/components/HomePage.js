import React, { Component } from 'react'
import Timer from './Timer';
import NavBar from './NavBar';
import ToDoListMenu from './ToDoListMenu';

export default class HomePage extends Component {
    render() {
        return (
            <div id="home-page-wrap">
                <NavBar />
                <Timer />
                <ToDoListMenu />
            </div>
        )
    }
}

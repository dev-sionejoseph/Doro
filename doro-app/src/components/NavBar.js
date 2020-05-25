import React, { Component } from 'react'
import fire from "../config/Firebase"

export default class NavBar extends Component {
    
    constructor(props) {
        super(props);

        this.state={loggedin: true}
        this.handleSignOut = this.handleSignOut.bind(this);
    }


    handleSignOut() {
        fire.auth().signOut();

        this.setState({
            loggedout: true
        })
    }
    
    render() {
        return (
            <nav>
                <ul>
                    <li><button onClick={this.handleSignOut}>Log Out</button></li>
                </ul>
            </nav>
            
        )
    }
}

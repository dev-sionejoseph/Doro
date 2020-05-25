import React, { Component } from 'react'
import fireBase from "../config/Firebase"

export default class NavBar extends Component {
    
    constructor(props) {
        super(props);

        this.state={loggedin: true}
        this.handleSignOut = this.handleSignOut.bind(this);
    }


    handleSignOut() {
        fireBase.auth().signOut();

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

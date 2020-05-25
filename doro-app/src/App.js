import firebase from 'firebase'
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    
    this.state = ({
      user: null
    });

    this.authcheck = this.authcheck.bind(this);
  }

  authcheck() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ 
          user: true 
        });
      } else {

        this.setState({
          user: null
        });
      }

    });
  }

  componentDidMount() {
    this.authcheck();
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<HomePage />) : (<SignInPage />)}
      </div>
    )
  }
}



import React, { Component } from 'react'
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import './App.css';
import fireINIT from './config/Firebase';

export default class App extends Component {
  constructor() {
    super();
    
    this.state = ({
      user: null
    });

    this.authcheck = this.authcheck.bind(this);
  }

  authcheck() {
    fireINIT.auth().onAuthStateChanged((user) => {
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



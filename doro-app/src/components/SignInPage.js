import React, { Component } from 'react'
import fireBase from '../config/Firebase';

export default class SignInPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            signIn: true,
            signUp: false,
            firstName: '',
            lastName: '',
            email:'',
            password:'',
            id: null,
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
        // this.addNoOpUser = this.addNoOpUser.bind(this);

    }

    handleChange(e){
        this.setState({
             [e.target.name]: e.target.value 
            });
    }

    handleSignIn(e){
        
        fireBase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({
                error: error.message
            });
          });
    }

    handleSignUp(e){
        this.setState({ 
            signIn: false, 
            signUp: true
        });
    }

    handleSubmit(e){

        fireBase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{
            this.setState({
                id: u.uid
            })
        }).catch((error) => {
            this.setState({
                error: error.message
            });
          })
      }
    

    // addNoOpUser(){
    //     // post to databasa as noop user
    // }

    render() {
        return (
            <div id="sign-in-page-wrap">
            {this.state.signIn ? (
                <div id="sign-in-form">
                    <div id="sign-in-input-wraps">
                        <input className="sign-in-inputs" name="email" id="si-email" placeholder="Email Address"></input>
                        <input className="sign-in-inputs" name="password" id="si-password" placeholder="Password"></input>
                    </div>
                    <div id="sign-in-button-wraps">
                        <button className="sign-in-button" onClick={this.handleSignIn}>Sign In</button>
                        <button className="sign-up-button">Sign Up</button>
                    </div>
                </div>
                
                ) : (
                    <div id="sign-up-form">
                        <div id="sign-up-input-wraps">
                            <input className="sign-up-inputs" name="firstName" id="su-first-name" placeholder="First Name"></input>
                            <input className="sign-up-inputs" name="lastName" id="su-last-name" placeholder="Last Name"></input>
                            <input className="sign-up-inputs" name="email" id="su-email" placeholder="Email Address"></input>
                            <input className="sign-up-inputs" name="password" id="su-password" placeholder="Password"></input>
                        </div>
                        <div id="sign-up-button-wraps">
                            <button className="sign-in-button">Sign In Intead</button>
                            <button className="submit-button">Submit</button>
                        </div>
                    </div>
                )} 
        </div>
        )
    }
}

import React, { Component } from 'react'

export default class SignInPage extends Component {
    constructor(props){
        super(props);

        this.state({
            signIn: true,
            signUp: false,
            firstName: '',
            lastName: '',
            email:'',
            id: null
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleChange(){

    }

    handleSignIn(){

    }

    handleSignUp(){

    }

    handleSubmit(){

    }
    
    render() {
        return (
            <div id="sign-in-page-wrap">
            {this.state.user ? (
                <div id="sign-in-form">
                    <div id="sign-in-input-wraps">
                        <input className="sign-in-inputs" id="si-email" placeholder="Email Address"></input>
                        <input className="sign-in-inputs" id="si-password" placeholder="Password"></input>
                    </div>
                    <div id="sign-in-button-wraps">
                        <button className="sign-in-button">Sign In</button>
                        <button className="sign-up-button">Sign Up</button>
                    </div>
                </div>
                
                ) : (
                    <div id="sign-up-form">
                        <div id="sign-up-input-wraps">
                            <input className="sign-up-inputs" id="su-first-name" placeholder="First Name"></input>
                            <input className="sign-up-inputs" id="su-last-name" placeholder="Last Name"></input>
                            <input className="sign-up-inputs" id="su-email" placeholder="Email Address"></input>
                            <input className="sign-up-inputs" id="su-password" placeholder="Password"></input>
                        </div>
                        <div id="sign-up-button-wraps">
                            <button className="sign-in-button">Sign In</button>
                            <button className="sign-up-button">Sign Up</button>
                        </div>
                    </div>
                )}
            
            
        </div>
        )
    }
}

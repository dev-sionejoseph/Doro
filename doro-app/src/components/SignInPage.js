import React, { Component } from 'react'
import fireINIT from '../config/Firebase';

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
            id: '',
            error: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNoOpUser = this.addNoOpUser.bind(this);
        this.handleBack = this.handleBack.bind(this);

    }

    handleChange(e){
        this.setState({
             [e.target.name]: e.target.value 
            });
    }

    handleSignIn(e){
        
        fireINIT.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
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

    handleBack(){
        this.setState({
            signIn: true,
            signUp: false
        })
    }
    
    async addNoOpUser(){
            // post to database as noop user
            let user = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                id: this.state.id
            }

            await fetch('/doro/users/signup', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            }
    
    handleSubmit(){

        fireINIT.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{
            console.log(u.user.uid);

            this.setState({
                id: u.user.uid
            })

            this.addNoOpUser(); //adds extra info and id to database

        }).catch((error) => {
            this.setState({
                error: error.message
            });
          })
      }
    

   

    render() {
        return (
            <div id="sign-in-page-wrap">
            {this.state.signIn ? (
                <div id="sign-in-form">
                    <div className="welcome">Welcome to Doro!</div>
                    <div id="sign-in-input-wraps">
                        <input className="sign-in-inputs" name="email" id="si-email" placeholder="Email Address" onChange={this.handleChange}></input>
                        <input className="sign-in-inputs" name="password" id="si-password" placeholder="Password" onChange={this.handleChange}></input>
                    </div>
                    <div id="sign-in-button-wraps">
                        <button className="sign-in-button" onClick={this.handleSignIn}>Sign In</button>
                        <button className="sign-up-button" onClick={this.handleSignUp}>Sign Up</button>
                    </div>
                </div>
                
                ) : (
                    <div id="sign-up-form">
                        <div className="welcome">Welcome to Doro!</div>
                        <div id="sign-up-input-wraps">
                            <input className="sign-up-inputs" name="firstName" id="su-first-name" placeholder="First Name" onChange={this.handleChange}></input>
                            <input className="sign-up-inputs" name="lastName" id="su-last-name" placeholder="Last Name" onChange={this.handleChange}></input>
                            <input className="sign-up-inputs" name="email" id="su-email" placeholder="Email Address" onChange={this.handleChange}></input>
                            <input className="sign-up-inputs" name="password" id="su-password" placeholder="Password" onChange={this.handleChange}></input>
                            {this.state.error}
                        </div>
                        <div id="sign-up-button-wraps">
                            <button className="back-button" onClick={this.handleBack}>Back</button>
                            <button className="submit-button" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                )} 
        </div>
        )
    }
}

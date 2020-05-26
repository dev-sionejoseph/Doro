import React, { Component } from "react";

export default class Timer extends Component {
    constructor(props) {
      super(props)

    // I gave two states, one to track seconds passed and one to track if the timer is on or off.

      this.state = {
          counting: false,
          minutes: 0,
          seconds: 0,
          chosenInterval: 25 
      }

    // I thought it best to use the bindings like suggested for our forms.

      this.handleStart = this.handleStart.bind(this)
      this.handlePause = this.handlePause.bind(this)
      this.handleReset = this.handleReset.bind(this)
      }
    
    // made different methods, one for each button, that manipulates states as needed
    // for some reaseon, timer only starts when I press start, then pause, THEN start. yikes.

    handleStart(event) {
      if(this.state.counting === false){
           this.timerCounting()
      }  
      
      this.setState({
          counting: true,
      })

       
    }
  
    handlePause(event) {
      event.preventDefault();
      if ((this.state.seconds > 0) & 
      (this.state.counting === true) & (this.s)){
            this.setState({
              counting: false
            })
            clearInterval(this.counter)    
      } else if (this.state.seconds > 0){
          this.setState({
              counting: true
          })
          this.timerCounting()
      }
    }
  
    handleReset(event) {
        this.setState({
            counting: false,
            minutes: 0,
            seconds: 0
      })
      clearInterval(this.counter)
      }


    timerCounting(){
            this.counter = setInterval(() => {
                if ((this.state.seconds < 59) & (this.state.minutes < this.state.chosenInterval)){
                    this.setState({
                        seconds: this.state.seconds+=1
                    })
                } else if (this.state.minutes < this.state.chosenInterval){
                    this.setState({
                        seconds: 0,
                        minutes: this.state.minutes+=1
                        })
                    }
                }, 1000);         
        } 

    render() {
      return (
        <div id='main-timer-wrap'>
            <div id='timer-view'>
                <div id='minutes'>
                    {this.state.minutes}:
                </div>
                <div id='seconds'>
                    {this.state.seconds}
                </div>
            </div>
            <div id='buttons'>
                <button name='Pause' onClick={this.handlePause}>Pause</button>
                <button name='Start' onClick={this.handleStart}>Start</button>
                <button name='Reset' onClick={this.handleReset}>Reset</button>
            </div>
        </div>
      );
    }
  
  }
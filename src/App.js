import React, { Component } from 'react';
import './App.css';

import Stopwatch from './Stopwatch';
import Button from './Button';
import Historic from './Historic';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTime: 0,
      status: false,
      trail: [],
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMark = this.handleMark.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleStart() {
    if (!this.state.status) {
      this.setState({
        status: true,
      });
      const startTime = Date.now() - this.state.runningTime;
      this.timer = setInterval(() => {
        this.setState({ runningTime: Date.now() - startTime });
      }, 100);
    }
  }

  handleStop() {
    this.setState({ status: false });
    clearInterval(this.timer);
  }

  handleMark() {
    if (this.state.runningTime) {
      this.setState({ trail: [].concat(this.state.trail, this.state.runningTime) }) 
    }
  }  

  handleReset() {
    this.setState({ 
      runningTime: 0, 
      status: false,
      trail: [],
    });
    clearInterval(this.timer);
  }

  handleModal() {
    if (this.state.runningTime) {
      this.setState({ trail: [].concat(this.state.trail, this.state.runningTime) }) 
    }
  }   

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { status, runningTime, trail } = this.state;
    return (
      <div className="App">
        <button className="btn-about" handleClick={() => this.handleModal}>About</button>
        <div className="container">
          <h1>Cronômetro</h1>
          <Stopwatch time={runningTime} status={status} reset={() => this.handleReset} />
          <div className="actions-buttons">
            <Button text="Start" handleClick={() => this.handleStart} />
            <Button text="Stop" handleClick={() => this.handleStop} />
            <Button text="Reset" handleClick={() => this.handleReset} />
            <Button text="Mark" handleClick={() => this.handleMark} />
          </div>
          <hr></hr>
          <Historic time={trail}></Historic>
        </div> 
        <h6>stopwatch made with react <span>&#10084;</span></h6> 
      </div>
    )
  }
}

export default App;

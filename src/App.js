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
      trail: 0,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleMark = this.handleMark.bind(this);
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
    this.setState({ trail: this.state.runningTime });
  }  

  handleReset() {
    this.setState({ runningTime: 0, status: false });
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { status, runningTime, trail } = this.state;
    return (
      <div className="App">
        <h1>Cronômetro</h1>
        <Stopwatch time={runningTime} status={status} reset={() => this.handleReset} />
        <Button text="Start" handleClick={() => this.handleStart} />
        <Button text="Stop" handleClick={() => this.handleStop} />
        <Button text="Reset" handleClick={() => this.handleReset} />
        <br></br>
        <Button text="Mark" handleClick={() => this.handleMark} />
        <hr></hr>
        <Historic time={trail}></Historic>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Stopwatch from './Stopwatch';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTime: 0,
      status: false,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleStart() {
    if (!this.state.status) {
      this.setState({
        status: true,
      });
      const startTime = Date.now() - this.state.runningTime;
      this.timer = setInterval(() => {
        this.setState({ runningTime: Date.now() - startTime });
      });
    }
  }

  handleStop() {
    this.setState({ status: false });
    clearInterval(this.timer);
  }

  handleReset() {
    this.setState({ runningTime: 0, status: false });
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { status, runningTime } = this.state;
    return (
      <div className="App">
        <h1>Stopwatch</h1>
        <Stopwatch time={runningTime} status={status} start={() => this.handleStart} reset={() => this.handleReset} />
        <Button text="Start" handleClick={() => this.handleStart} />
        <Button text="Stop" handleClick={() => this.handleStop} />
        <Button text="Reset" handleClick={() => this.handleReset} />
      </div>
    )
  }
}

export default App;

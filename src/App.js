import React, { Component } from 'react';
import './App.css';

import Stopwatch from './Stopwatch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTime: 0,
      status: false,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleStart() {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({ runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  }
  handleReset() {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, status: false });
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
      </div>
    )
  }
}

export default App;

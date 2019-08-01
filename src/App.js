import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Stopwatch from './Stopwatch';
import Button from './Button';
import Historic from './Historic';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleMark = this.handleMark.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }  

  handleStart() {
    if (!this.props.isRunning) {
      this.timer = setInterval(() => {
        this.props.dispatch({ type: 'START_TIMER' });
      }, 100);
    }
  }

  handleStop() {
    this.props.dispatch({ type: 'STOP_TIMER' });
    clearInterval(this.timer);
  }

  handleMark() {
    if (this.props.runningTime) {
      this.props.dispatch({ type: 'MARK_TIMER' })
    }
  }  

  handleReset() {
    this.props.dispatch({ type: 'RESET_TIMER' });
    clearInterval(this.timer);
  }   

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Stopwatch</h1>
          <Stopwatch time={this.props.runningTime} />
          <div className="actions-buttons">
            <Button text="Start" handleClick={() => this.handleStart} />
            <Button text="Stop" handleClick={() => this.handleStop} />
            <Button text="Mark" handleClick={() => this.handleMark} />
            <Button text="Reset" handleClick={() => this.handleReset} />
          </div>
          <hr></hr>
          <Historic time={this.props.trails}></Historic>
        </div> 
        <h6>stopwatch made with react/redux<span> &#10084;</span>
          <br />
          developer by 
          <a href="https://github.com/tamirisapbonicenha" target="_blank">tamirisapbonicenha</a>
        </h6> 
      </div>
    )
  }
}

const mapStateToProps = state => ({
  runningTime: state.timer.runningTime,
  isRunning: state.timer.isRunning,
  trails: state.timer.trails
});

export default connect(mapStateToProps)(App);
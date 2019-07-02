import React, { Component } from 'react';

class Stopwatch extends Component {
  render() {
    const { time, status } = this.props;
    return (
      <div>
        <p>{time}ms</p>
        <button onClick={this.props.start()}>{status ? 'Stop' : 'Start'}</button>
        <button onClick={this.props.reset()}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;

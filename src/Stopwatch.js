import React, { Component } from 'react';

class Stopwatch extends Component {
  render() {
    const { time, status } = this.props;
    return (
      <div>
        <p>{time}ms</p>
      </div>
    );
  }
}

export default Stopwatch;

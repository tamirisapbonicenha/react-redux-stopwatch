import React, { Component, Fragment } from 'react';

class Stopwatch extends Component {
  render() {
    const { time } = this.props;
    return (
      <Fragment>
        <p>{time}ms</p>
      </Fragment>
    );
  }
}

export default Stopwatch;

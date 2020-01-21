import React, { Component } from 'react';

class CounterButton extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  updateCount = () => {
    this.setState(state => {
      return {count: this.state.count + 1}
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  render() {
    console.log('CounterButton');
    return(
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}
 export default CounterButton;

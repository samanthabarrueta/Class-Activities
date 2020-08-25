import React from "react";
import Cardbody from "./Cardbody";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <Cardbody 
      count={this.state.count}
      handleIncrement={this.handleIncrement}
      handleDecrement={this.handleDecrement}/>
    );
  }
}

export default Counter;

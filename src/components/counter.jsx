import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = e => {
    console.log(e);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return this.state.value === 0 ? "Zero" : this.state.value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

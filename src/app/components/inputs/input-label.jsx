import React, { Component } from 'react'

class InputLabel extends Component {
  render() {
    if(this.props.label && this.props.name) {
      return (
        <label htmlFor={this.props.name} className={`input-figure__label ${this.props.className}`}>
          <span>{this.props.label}</span>
        </label>
      );
    } else {
      return null;
    }
  }
}

export default InputLabel;

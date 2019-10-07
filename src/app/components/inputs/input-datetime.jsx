import React, { Component } from 'react'

import InputLabel from './input-label'

class InputDatetime extends Component {
  render() {
    return (
      <figure className={`input-figure input-figure--datetime ${this.props.className}`}>
        <input
          id={this.props.name}
          max={this.props.max}
          min={this.props.min}
          name={this.props.name}
          onChange={this.props.onChange}
          type="datetime-local"
          step={this.props.step}
          value={this.props.value}
        />
        <InputLabel
          label={this.props.label}
          name={this.props.name}
        />
      </figure>
    );
  }
}

export default InputDatetime;

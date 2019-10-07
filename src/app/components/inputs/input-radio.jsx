import React, { Component } from 'react'

import InputLabel from './input-label'

class InputRadio extends Component {
  render() {
    return (
      <figure className={`input-figure input-figure--radio ${this.props.className}`}>
        <input
          checked={this.props.checked}
          id={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          type="radio"
        />
        <InputLabel
          label={<React.Fragment><b className="label__primary">{this.props.label}</b><span className="label__secondary">{this.props.info}</span></React.Fragment>}
          name={this.props.value}
          className="label--radio"
        />
      </figure>
    );
  }
}

export default InputRadio;

import React, { Component } from 'react'

import InputLabel from './input-label'

class InputCheckbox extends Component {

  render() {
    return (
      <figure className={`input-figure input-figure--checkbox ${this.props.className}`}>
        <input
          checked={this.props.value ? 'true' : ''}
          disabled={this.props.disabled}
          id={this.props.name}
          name={this.props.name}
          onChange={this.props.onChange}
          type="checkbox"
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

export default InputCheckbox;

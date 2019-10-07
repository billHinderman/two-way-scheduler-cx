import React, { Component } from 'react'

import InputLabel from './input-label'

class InputEmail extends Component {
  render() {
    return (
      <figure className={`input-figure input-figure--email ${this.props.className}`}>
        <input
          id={this.props.name}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          type="email"
          value={this.props.value}
        />
        <InputLabel
          label={this.props.label}
          className={this.props.labelClassName}
          name={this.props.name}
        />
      </figure>
    );
  }
}

export default InputEmail;

import React, { Component } from 'react'

import InputLabel from './input-label'

class InputUrl extends Component {
  render() {
    return (
      <figure className={`input-figure input-figure--text ${this.props.className}`}>
        <input
          id={this.props.name}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          type="url"
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

export default InputUrl;

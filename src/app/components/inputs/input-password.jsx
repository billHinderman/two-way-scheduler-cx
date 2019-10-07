import React, { Component } from 'react'

import { Eye, EyeOff } from 'react-feather'

import InputLabel from './input-label'

class InputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  onToggleShow = (e) => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  }

  renderAsPassword() {
    return (
      <figure className={`input-figure input-figure--password ${this.props.className}`}>
        <input
          id={this.props.name}
          max={this.props.max}
          min={this.props.min}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          type="password"
          value={this.props.value}
        />
        <InputLabel
          label={this.props.label}
          className={this.props.labelClassName}
          name={this.props.name}
        />
        <button tabIndex="-1" type={`button`} onClick={this.onToggleShow}>
          <EyeOff />
        </button>
      </figure>
    );
  }

  renderAsText() {
    return (
      <figure className={`input-figure input-figure--password input-figure--showing ${this.props.className}`}>
        <input
          autoCapitalize={`none`}
          id={this.props.name}
          max={this.props.max}
          min={this.props.min}
          name={this.props.name}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          type="text"
          value={this.props.value}
        />
        <InputLabel
          label={this.props.label}
          name={this.props.name}
        />
        <button tabIndex="-1" type={`button`} onClick={this.onToggleShow}>
          <Eye />
        </button>
      </figure>
    );
  }

  render() {
    if(this.state.show) {
      return this.renderAsText();
    } else {
      return this.renderAsPassword();
    }
  }
}

export default InputPassword;

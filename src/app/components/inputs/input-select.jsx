import React, { Component } from 'react'

import { ChevronDown } from 'react-feather'

import InputLabel from './input-label'

class InputSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  onFocus = () => {
    this.setState({focus: true});
  }

  onBlur = () => {
    this.setState({focus: false});
  }

  render() {
    return (
      <figure
        className={`input-figure input-figure--select ${this.props.className} ${this.state.focus ? 'input-figure--selected' : ''}`}
        onMouseEnter={this.onFocus}
        onMouseOut={this.onBlur}
      >
        <select
          id={this.props.name}
          name={this.props.name}
          onChange={this.props.onChange}
          rows={this.props.rows}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.props.value}
        >
          {this.props.children}
        </select>
        <InputLabel
          label={this.props.label}
          name={this.props.name}
        />
        <ChevronDown
          className="input-figure__icon"
          size={33.984}
        />
      </figure>
    );
  }
}

export default InputSelect;

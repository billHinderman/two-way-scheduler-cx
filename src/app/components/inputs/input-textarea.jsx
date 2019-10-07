import React, { Component } from 'react'

import InputLabel from './input-label'

class InputTextarea extends Component {

  render() {
    return (
      <figure className={`input-figure input-figure--textarea ${this.props.className}`}>
        <textarea
          className={`${this.props.value.length ? 'textarea--full' : 'textarea--empty'}`}
          id={this.props.name}
          name={this.props.name}
          maxLength={this.props.maxLength}
          onChange={this.props.onChange}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          rows={this.props.rows}
          value={this.props.value}
        >
        </textarea>
        {this.props.show_remaining &&
          <span className="textarea--remaining"><b>{this.props.value.length}</b> / {this.props.maxLength}</span>
        }

        <InputLabel
          className={this.props.labelClassName}
          label={this.props.label}
          name={this.props.name}
        />
      </figure>
    );
  }
}

export default InputTextarea;

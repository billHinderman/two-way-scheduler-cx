import React, { Component } from 'react'

import Auth from 'j-toker'
import queryString from 'query-string'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import InputDatetime from '../../../components/inputs/input-datetime'
import InputSelect from '../../../components/inputs/input-select'
import InputText from '../../../components/inputs/input-text'

class AppointmentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interview_max: '',
      interview_min: '',
      title: '',
      length: '',
      start_at: '',
      talent_key: '',
      talent: []
    }
  }

  onChange = (e) => {
    e.preventDefault();
    let stateChange = {};
    stateChange[e.target.name] = e.target.value;
    this.setState(stateChange);
  }

  isSubmittable() {
    if(false) {
        return 'disabled';
      } else {
        return '';
      }
  }

  render() {

    return (
      <div className="template template--appointment template--appointment-new">
      <Helmet>
        <title>Sign Up</title>
        <meta property="og:title" content="Sign Up"/>
      </Helmet>
      <figure className="appointment__element appointment__element--with-shadow appointment__element--new">
        <form noValidate onSubmit={this.onSubmit}>
          <InputText
            label="Title"
            name="title"
            placeholder="VP of Engineering"
            value={this.state.title}
            onChange={this.onChange}
          />
          <InputSelect
            label={`Length`}
            name={`length`}
            value={this.state.length}
            onChange={this.onChange}
          >
            <option disabled value=''>Select an interview length</option>
            <option value='30'>30 minutes</option>
            <option value='60'>60 minutes</option>
            <option value='90'>90 minutes</option>
          </InputSelect>
          <InputDatetime
            label="Start date"
            name="start_at"
            step={1800}
            value={this.state.start_at}
            onChange={this.onChange}
          />
          <InputSelect
            label={`Interviewee`}
            name={`talent_key`}
            value={this.state.talent_key}
            onChange={this.onChange}
          >
            <option disabled value=''>Select an interviwee</option>
            {this.state.talent.map((talent_option) =>
              <option key={talent_option.key} value={talent_option.key}>{talent_option.name}</option>
            )}
          </InputSelect>
          <button type={`submit`} className="button" disabled={this.isSubmittable()}>Create interview</button>
        </form>
      </figure>
      </div>
    );
  }
}

export default AppointmentNew;

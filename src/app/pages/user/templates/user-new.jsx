import React, { Component } from 'react'

import Auth from 'j-toker'
import queryString from 'query-string'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom'

import InputCheckbox from '../../../components/inputs/input-checkbox'
import InputEmail from '../../../components/inputs/input-email'
import InputPassword from '../../../components/inputs/input-password'
import InputText from '../../../components/inputs/input-text'

class UserNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password_confirm: '',
    };
  }

  onChange = (e) => {
    e.preventDefault();
    let stateChange = {};
    stateChange[e.target.name] = e.target.value;
    this.setState(stateChange);
  }

  onToggleCheckbox = (e) => {
    let stateChange = {};
    stateChange[e.target.name] = !this.state[e.target.name];
    this.setState(stateChange);
  }

  onSubmit = (e) => {
    e.preventDefault();
    Auth.emailSignUp({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirm,
      role: 'talent'
    })
    .then((response) => {
      Auth.emailSignIn({
        email: this.state.email,
        password: this.state.password
      })
      .then((response) => {
        if(window.location.search.includes('destination')) {
          const parsed = queryString.parse(window.location.search),
          destination = parsed.destination;
          window.location = (destination);
        } else {
          window.location = (`/`);
        }
      })
    });
  }

  onToggleLogin = (e) => {
    e.preventDefault();
    window.dispatchEvent(new Event('toggleLogin'));
  }

  isSubmittable() {
    if(this.state.name.length < 2 ||
      this.state.email.length < 3 ||
      this.state.password.length < 8 ||
      this.state.password_confirm.length < 8 ||
      this.state.password !== this.state.password_confirm) {
        return 'disabled';
      } else {
        return '';
      }
  }

  render() {
    return (
      <div className="template template--user template--user-new">
        <Helmet>
          <title>Sign Up</title>
          <meta property="og:title" content="Sign Up"/>
        </Helmet>
        <figure className="user__element user__element--with-shadow user__element--signup">
          <form noValidate onSubmit={this.onSubmit}>
            <InputText
              label="Name"
              name="name"
              placeholder="Jane Smith"
              value={this.state.name}
              onChange={this.onChange}
            />
            <InputEmail
              label="Email"
              name="email"
              placeholder="hello@goshortwave.com"
              value={this.state.email}
              onChange={this.onChange}
            />
            <InputPassword
              label="Password"
              name="password"
              value={this.state.password}
              placeholder={`Must be 8+ characters`}
              onChange={this.onChange}
            />
            <InputPassword
              label="Confirm password"
              name="password_confirm"
              value={this.state.password_confirm}
              placeholder={`Must be 8+ characters`}
              onChange={this.onChange}
            />
            <button type={`submit`} className="button" disabled={this.isSubmittable()}>Create account</button>
          </form>
        </figure>
      </div>
    );
  }
}

export default UserNew;

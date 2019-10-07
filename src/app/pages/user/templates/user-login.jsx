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

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.loginLightboxRef = React.createRef();
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  onChange = (e) => {
    e.preventDefault();
    let stateChange = {};
    stateChange[e.target.name] = e.target.value;
    stateChange['error'] = '';
    this.setState(stateChange);
  }

  onLoginClick = (e) => {
    e.preventDefault();
    Auth.emailSignIn({
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      if(this.props.destination) {
        window.location = decodeURIComponent(this.props.destination);
      } else {
        window.location = window.location.href.replace('?login','');
      }
    })
    .catch((err) => {
      const reason = err.reason == "Invalid credentials." ? "We can't find an account with that email and password combination." : err.reason;
      this.setState({error: reason});
    })
  }

  onCloseLogin = (e) => {
    this.loginLightboxRef.current.classList.add('lightbox--transitioning');
    setTimeout(() => {
      this.props.onToggleLogin(e);
    },300)
  }

  onSignupClick = (e) => {
    e.preventDefault();
    this.props.onToggleLogin(e);
    if(this.props.destination) {
      window.location = (`/account/sign-up?destination=${this.props.destination}`);
    } else {
      window.location = (`/account/sign-up?destination=${encodeURIComponent(window.location.pathname)}`);
    }
  }

  render() {
    return (
      <div className="template template--user template--user-new">
        <Helmet>
          <title>Log In</title>
          <meta property="og:title" content="Log In"/>
        </Helmet>
        <figure className="user__element user__element--with-shadow user__element--signup">
          <form noValidate onSubmit={this.onLoginClick}>
            <InputEmail
              label="Email"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <InputPassword
              label="Password"
              name="password"
              value={this.state.password}
              onChange={this.onChange}
            />
            <button type={`submit`} className="button">Sign in</button>
          </form>
        </figure>
      </div>
    );
  }
}

export default UserLogin;

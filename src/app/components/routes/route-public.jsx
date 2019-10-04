import React, { Component } from 'react'

import Auth from 'j-toker'
import { Redirect, Route } from 'react-router-dom'

class RoutePublic extends Component {
  render() {
    if(!Auth.user.signedIn) {
      return (
        <Route path={this.props.path} exact component={this.props.component}/>
      )
    } else {
      return (
        <Redirect to={`/`} />
      )
    }
  }
}

export default RoutePublic;

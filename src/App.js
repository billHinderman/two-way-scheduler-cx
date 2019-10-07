import React, { Component } from 'react'

import Auth from 'j-toker'
import createHistory from 'history/createBrowserHistory'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'

import componentAsync from './app/components/component-async'

import { checkTriggerLogin } from './app/utilities/user'

import RoutePrivate from './app/components/routes/route-private'
import RoutePublic from './app/components/routes/route-public'
import './App.css';

const history = createHistory();

const CalendarEdit  = componentAsync(() => import('./app/pages/calendars/templates/calendar-edit'))

const StaticHome  = componentAsync(() => import('./app/pages/static/templates/static-home'))

const UserLogin  = componentAsync(() => import('./app/pages/user/templates/user-login'))
const UserNew  = componentAsync(() => import('./app/pages/user/templates/user-new'))

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Router history={history}>
        <div className="app">
        <main role="main" className="page-content">
        <div>outside</div>
          <Switch>
            <Route path="/" exact component={StaticHome}/>

            {/* Calendar */}
            <Route path="/calendar/edit" exact component={CalendarEdit}/>

            {/* User */}
            <RoutePublic path="/account/sign-up" exact component={UserNew}/>
            <RoutePublic path="/account/log-in" exact component={UserLogin}/>

            {/* Static */}
          </Switch>
        </main>
        </div>
      </Router>
    );
  }
}

export default App;

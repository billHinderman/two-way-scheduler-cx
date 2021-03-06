import React from 'react'

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

// Pages
const AppointmentConfirm  = componentAsync(() => import('./app/pages/appointments/templates/appointment-confirm'))
const AppointmentEdit  = componentAsync(() => import('./app/pages/appointments/templates/appointment-edit'))
const AppointmentNew  = componentAsync(() => import('./app/pages/appointments/templates/appointment-new'))

const CalendarEdit  = componentAsync(() => import('./app/pages/calendars/templates/calendar-edit'))

const InterviewNew  = componentAsync(() => import('./app/pages/interviews/templates/interview-new'))

const StaticHome  = componentAsync(() => import('./app/pages/static/templates/static-home'))

const UserLogin  = componentAsync(() => import('./app/pages/user/templates/user-login'))
const UserNew  = componentAsync(() => import('./app/pages/user/templates/user-new'))

function App() {
  return (
    <Router history={history}>
      <div className="app">
      <main role="main" className="page-content">
      <div>outside</div>
        <Switch>
          <Route path="/" exact component={StaticHome}/>

          {/* Appointment */}
          <Route path="/appointment/new" exact component={AppointmentNew}/>

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

export default App;

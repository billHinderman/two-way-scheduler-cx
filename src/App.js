import React from 'react';

import Auth from 'j-toker'
import createHistory from 'history/createBrowserHistory'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'

import { checkTriggerLogin } from './app/utilities/user'

import RoutePrivate from './app/components/routes/route-private'
import RoutePublic from './app/components/routes/route-public'

import './App.css';

const history = createHistory();

function App() {
  checkTriggerLogin();
  return (
    <Router history={history}>
      <div className="app">
      <main role="main" className="page-content">
        <Switch>
          {/* Calendar */}

          {/* User */}

          {/* Static */}
        </Switch>
      </main>
      </div>
    </Router>
  );
}

export default App;

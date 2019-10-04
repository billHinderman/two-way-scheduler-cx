import React from 'react';
import ReactDOM from 'react-dom';
import Auth from 'j-toker'
import App from './App';
import * as serviceWorker from './serviceWorker';

import { apiUrl, baseUrl } from './app/_CONSTANTS'

Auth.configure({
  apiUrl: apiUrl,
  passwordResetSuccessUrl: function() {
    return `${baseUrl}/account/reset-password`;
  },
}).always(function() {
  ReactDOM.render(<App />, document.getElementById('app'));

  serviceWorker.unregister();
});

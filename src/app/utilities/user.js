import axios from 'axios'

import { apiUrl } from '../_CONSTANTS'

export const fetchUserByKey = (user_key) => {
  let fetchUserByKey = new Promise((resolve, reject) => {
    axios.get(`${apiUrl}/users/${user_key}`)
    .then((response) => {
      resolve(response);
    })
    .catch((error) => {
      reject(error);
    });
  });
  return fetchUserByKey;
}


export const checkTriggerLogin = () => {
  if(window.location.search.includes('login')) {
    window.dispatchEvent(new Event('toggleLogin'));
  }
}

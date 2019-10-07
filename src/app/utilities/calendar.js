import axios from 'axios'
import $ from 'jquery'
import { apiUrl } from '../_CONSTANTS'

export const fetchCalendarBySelf = () => {
  let fetchCalendarBySelf = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/self/calendar`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchCalendarBySelf;
}

export const fetchCalendarByUser = (user_key) => {
  let fetchCalendarByUser = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/users/${user_key}/calendar`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchCalendarByUser;
}

export const updateCalendarAvailability = (_params) => {
  let updateCalendarAvailability = new Promise((resolve, reject) => {
    $.ajax({
      type: `PATCH`,
      url: `${apiUrl}/self/calendar`,
      context: this,
      dataType:'json',
      data: _params,
      processData: false,
      contentType: false,
      cache: false,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return updateCalendarAvailability;
}

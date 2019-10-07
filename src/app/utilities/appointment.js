import axios from 'axios'
import $ from 'jquery'
import { apiUrl } from '../_CONSTANTS'

export const fetchAppointmentsBySelf = (page = 1) => {
  let fetchAppointmentsBySelf = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/self/appointments?page=${page}`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchAppointmentsBySelf;
}

export const fetchAppointmentsByInterview = (interview_key,page = 1) => {
  let fetchAppointmentsByInterview = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/interviews/${interview_key}/appointments?page=${page}`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchAppointmentsByInterview;
}

export const fetchConfirmedAppointmentsByInterview = (interview_key,page = 1) => {
  let fetchAppointmentsByInterview = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/interviews/${interview_key}/appointments/confirmed?page=${page}`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchConfirmedAppointmentsByInterview;
}

export const fetchAppintmentByKey = (interview_key,appointment_key) => {
  let fetchAppintmentByKey = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/interviews/${interview_key}/appointments/${appointment_key}`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchAppintmentByKey;
}

export const createAppointment = (interview_key,_params) => {
  let createAppointment = new Promise((resolve, reject) => {
    $.ajax({
      type: `POST`,
      url: `${apiUrl}/interviews/${interview_key}/appointments`,
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
  return createAppointment;
}

export const confirmAppointment = (interview_key,appointment_key) => {
  let confirmAppointment = new Promise((resolve, reject) => {
    $.ajax({
      type: `PATCH`,
      url: `${apiUrl}/interviews/${interview_key}/appointments/${appointment_key}/confirm`,
      context: this,
      cache: false,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return confirmAppointment;
}

export const unconfirmAppointment = (interview_key,appointment_key) => {
  let unconfirmAppointment = new Promise((resolve, reject) => {
    $.ajax({
      type: `PATCH`,
      url: `${apiUrl}/interviews/${interview_key}/appointments/${appointment_key}/unconfirm`,
      context: this,
      cache: false,
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return unconfirmAppointment;
}

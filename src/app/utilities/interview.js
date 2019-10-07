import axios from 'axios'
import $ from 'jquery'
import { apiUrl } from '../_CONSTANTS'

export const fetchInterviewsBySelf = (page = 1) => {
  let fetchInterviewsBySelf = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/self/interviews?page=${page}`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchInterviewsBySelf;
}

export const fetchConfirmedInterviewsBySelf = (page = 1) => {
  let fetchConfirmedInterviewsBySelf = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/interviews/confirmed?page=${page}`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchConfirmedInterviewsBySelf;
}

export const fetchInterviewByKey = (interview_key) => {
  let fetchInterviewByKey = new Promise((resolve, reject) => {
    $.ajax({
      type: `GET`,
      url: `${apiUrl}/interviews/${interview_key}`,
      context: this
    })
    .done(function(data) { resolve(data) })
    .fail(function(jqXhr) { reject(jqXhr) });
  });
  return fetchInterviewByKey;
}

export const createInterview = (_params) => {
  let createInterview = new Promise((resolve, reject) => {
    $.ajax({
      type: `POST`,
      url: `${apiUrl}/interviews`,
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
  return createInterview;
}

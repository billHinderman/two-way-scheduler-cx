import moment from 'moment'

export const formatDateAsFromNow = (date) => {
  const date_as_moment = moment(date);
  const today_as_moment = moment();
  if(today_as_moment.diff(date_as_moment, 'days') <= 2) {
    return date_as_moment.fromNow();
  } else {
    return date_as_moment.format('MM DD, YYYY');
  }
}

export const formatDateAsHumanized = (date) => {
  const date_as_moment = moment(date);
  return date_as_moment.format('h:mma [on] MMMM Do, YYYY');
}

export const formatArrayAsAlphaByKey = (array, key) => {
  const compare = (a,b) => {
    if (a[key] < b[key])
      return -1;
    if (a[key] > b[key])
      return 1;
    return 0;
  }
  return array.sort(compare);
}

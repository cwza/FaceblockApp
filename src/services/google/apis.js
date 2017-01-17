import * as utils from '../../utils'
import * as Constants from '../../Constants'
import { camelizeKeys } from 'humps'

const getParamsFromHash = (hash) => {
  let params = {};
  let queryString = hash.substring(1);
  let regex = /([^&=]+)=([^&]*)/g, m;
  while (m = regex.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  return camelizeKeys(params);
}

const getUserInfo = (token) => {
  const API_ROOT = 'https://www.googleapis.com/oauth2/v2/userinfo?alt=json';
  const fullUrl = API_ROOT + '&access_token=' + token;
  return fetch(fullUrl)
    .then(response => {
      return response.json().then(json => ({json, response}));
    }).then(({json, response}) => {
      if(!response.ok) return Promise.reject(json.error);
      return camelizeKeys(json);
    })
}

export {getParamsFromHash, getUserInfo};

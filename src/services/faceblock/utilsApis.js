import { camelizeKeys } from 'humps'
import { isEmpty } from 'lodash'
import {AsyncStorage} from 'react-native';

//TODO add real server domain
let API_ROOT = 'http://faceblock:3001/api/';
if(process.env.NODE_ENV === 'development') {
  API_ROOT = 'http://localhost:3001/api/';
// const API_ROOT = 'https://localhost:3043/api/';
}

const getFaceblockTokenFromLocalStorage = async () => {
  let reduxLocalStorage = await AsyncStorage.getItem('redux');
  // if(reduxLocalStorage)
  //   reduxLocalStorage = JSON.parse(reduxLocalStorage);
  if(reduxLocalStorage && reduxLocalStorage.localStorage && reduxLocalStorage.localStorage.authentication)
    return reduxLocalStorage.localStorage.authentication.item.faceblockToken;
  return '';
}

const getReqHeaders = async () => {
  return {
    "Content-Type": "application/json",
    "faceblock-token": await getFaceblockTokenFromLocalStorage(),
  }
}

const callGet = (fullUrl) => {
  console.log('fetch url: ', fullUrl);
  getReqHeaders.then(reqHeaders => {
    return fetch(fullUrl, {
      method: "GET",
      headers: reqHeaders,
    }).then(response => {
      return response.json().then(json => ({json, response}));
    }).then(({json, response}) => {
      if(!response.ok) return Promise.reject(json.error);
      return camelizeKeys(json);
    })
  })
}

const callPost = (fullUrl, data) => {
  console.log('create url: ', fullUrl);
  console.log('create data: ', data);
  getReqHeaders.then(reqHeaders => {
    return fetch(fullUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: reqHeaders,
      credentials: "same-origin"
    }).then(response => {
      return response.json().then(json => ({json, response}));
    }).then(({json, response}) => {
      if(!response.ok) return Promise.reject(json.error);
      return camelizeKeys(json);
    });
  });
}

const callDelete = (fullUrl) => {
  console.log('delete url: ', fullUrl);
  getReqHeaders(reqHeaders => {
    return fetch(fullUrl, {
      method: "DELETE",
      headers: reqHeaders,
      credentials: "same-origin"
    }).then(response => {
      if(!response.ok) return response.json();
    }).then(json => {
      if(json) return Promise.reject(json.error);
    });
  });
}

const getFetchOldQueryStr = (queryStr, entities) => {
  if(isEmpty(entities))
    return queryStr;
  for(let entity of entities.slice(0).reverse()) {
    if(!isEmpty(entity))
      return queryStr + '&underNearId=' + entity.id;
  }
}

const getFetchNewQueryStr = (queryStr, entities) => {
  if(isEmpty(entities))
    return queryStr;
  for(let entity of entities) {
    if(!isEmpty(entity)) {
      return queryStr + '&upperNearId=' + entity.id;
    }
  }
}

export {API_ROOT, getReqHeaders, callGet, callPost, callDelete, getFetchOldQueryStr, getFetchNewQueryStr}

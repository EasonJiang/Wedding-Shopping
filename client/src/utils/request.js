import { hashHistory } from 'react-router';
import { setItem } from '../utils/utils'
/**
 * 
 * @param {http request method} method 
 * @param {http url} url 
 * @param {body} body 
 */
export default function request(method, url, body) {
  method = method.toUpperCase();
  if (method === 'GET') {
    body = undefined;
  } else {
    body = body && JSON.stringify(body);
  }

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Token': sessionStorage.getItem('access_token') || '89elileffiiwe,s,dnf39853498'
    },
    body
  })
    .then((res) => {
      if (res.status === 401) {
        return Promise.reject('Unauthorized.');
      } else {
         return res.json();
      }
    })
    .then((json)=>{
      console.log('token-------------Client:', json);
        if (json.data.token) {
          setItem('access_token', json.data.token);
          setItem('userInfo', JSON.stringify(json.data.userInfo));
        }
        return json;
    })
    .catch(err => console.log('Error:', err));
}


export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);
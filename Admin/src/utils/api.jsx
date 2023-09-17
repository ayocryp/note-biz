import axios from 'axios';
import { siteEnv } from '../config/baseUrl';

const axiosAPI = axios.create({
  baseURL: siteEnv
});

const apiRequest = async (method, url, request, authenticate = true) => {
  let headers = {};
  headers['Accept'] = 'application/json';
  if (authenticate) {
    const access_token = auth.getSessionToken();
    if (!access_token) return Promise.reject({});
    headers['Authorization'] = `Bearer ${access_token}`;
  }
  console.log({ headers });
  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => {
      return Promise.resolve(res.data);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const get = (url, authenticate = false) => apiRequest('get', url, {}, authenticate);

const post = (url, request, authenticate = true) =>
  apiRequest('post', url, request, authenticate);

const deleteRequest = (url, request) => apiRequest('delete', url, request);

const put = (url, request, authenticate = true) =>
  apiRequest('put', url, request, authenticate);

const patch = (url, request, authenticate = true) =>
  apiRequest('patch', url, request, authenticate);

const API = {
  get,
  delete: deleteRequest,
  post,
  put,
  patch,
};

export default API;

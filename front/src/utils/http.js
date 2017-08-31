import axios from 'axios';

export const setDefaults = () => {
  axios.defaults.baseURL = 'http://localhost:9001/';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
};

export const get = url => axios.get(url);
export const post = url => axios.post(url);
export const put = url => axios.put(url);
export const remove = url => axios.delete(url);

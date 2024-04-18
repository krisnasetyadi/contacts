import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_CONTACT,
  timeout: 60000,
});

api.interceptors.request.use(
  async (config) =>  config,
  (error) =>  Promise.reject(error)
);

export default class RequestHandler {
  constructor(url) {
    this.url = url;
  }

  async request(method, data, params) {
    try {
      const response = await api.request({
        method,
        url: `${this.url}`,
        data,
        params: {
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async requestBy(method, path, data, params) {
    try {
      const response = await api.request({
        method,
        url: `${this.url}/${path}`,
        data,
        params: {
          ...params,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  get(params) {
    return this.request('get', null, params);
  }

  find(param) {
    return this.request('get', param);
  }

  store(body) {
    return this.request('post', body);
  }

  update(id, body) {
    return this.requestBy('put', id, body);
  }

  delete(id) {
    return this.requestBy('delete', id);
  }

}

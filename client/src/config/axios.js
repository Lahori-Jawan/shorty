import axios from 'axios';
import { TokenService } from '@/services/Token';
import store from '../store';

const defaultOptions = {
  baseURL: process.env.baseURL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use((config) => {
  const token = TokenService.getToken();
  config.headers.Authorization = token ? `${token}` : '';
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function(error) {
    // Do something with response error
    if ([401, 403].includes(error.response.status)) {
      console.log('unauthorized, logging out ...');
      await store.dispatch('Logout');
    }
    return Promise.reject(error.response);
  }
);

export { instance as axios };

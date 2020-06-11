import Axios, { AxiosRequestConfig } from 'axios';
import enviroment from '../enviroments';
import { store } from '../store';
import { Alert } from 'react-native';

const createAxiosInstance = () => {
  let config: AxiosRequestConfig = {
    baseURL: enviroment.API_URL,
    timeout: 5000,
  };
  const token = store.getState().user.token;
  if (token) {
    config.headers = { Authorization: 'Bearer ' + token };
  }
  const instance = Axios.create(config)

  instance.interceptors.response.use(value => {
    return value
  }, error => {
    if (error.response.data.errors && error.response.data.errors.length) {
      throw {
        message: error.response.data.errors[0]
      }
    } else {
      return error
    }
  })

  return instance;
};

export default {
  createAxiosInstance,
};

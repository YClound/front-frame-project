import axios from 'axios';
import cst from './constant';

type IRequest = {
  url: string;
  params?: any;
  headers?: {
    'Content-Type'?: 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data'
    'content-type'?: 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data'
  }
}

const instance = axios.create({
  baseURL: cst.API,
  timeout: 30000,
})

export const get: (params: IRequest) => Promise<void> = ({
  url,
  params,
  headers,
}) => {
  return instance.get(url, { params, headers }).then(res => {
    const { data } = res || {};
    if (data.code === 0) {
      return data.data;
    } else {
      Promise.reject(data);
    }
  }, (error) => {
    Promise.reject({ message: error.message })
  })
}

export const post: (params: IRequest) => Promise<void> = ({
  url,
  params,
  headers
}) => {
  return instance.post(url, params, { headers }).then(res => {
    const { data } = res || {};
    if (data.code === 0) {
      return data.data;
    } else {
      return Promise.reject(data);
    }
  }, (error) => {
    return Promise.reject(error);
  })
}
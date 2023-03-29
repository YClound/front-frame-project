import { post, get } from '@/public/request';
import axios from 'axios';

export const uploadApi = (params = {}) => {
  return post({
    url: '/api/upload',
    params,
    headers: {
      "content-type": "multipart/form-data"
    }
  })
}

export const mergedApi = (params = {}) => {
  return post({
    url: '/api/merge',
    params,
    headers: {
      "content-type": "application/json"
    }
  })
}

export const getApi = (params={}) => {
  return get({
    url: '/',
    params,
    headers: {
      "content-type": "multipart/form-data"
    }
  })
}
import { post, get } from '@/public/request';

export const uploadApi = (params = {}) => {
  return post({
    url: '/api/upload',
    params,
    headers: {
      "content-type": "multipart/form-data"
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
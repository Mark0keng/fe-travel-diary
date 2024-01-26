import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  register: 'user/register',
  login: 'user/login',
  createPost: 'post/create',
  getPost: 'post',
  createBookmark: 'bookmark/create',
  getProfile: 'user/get-profile',
  getMyPost: 'post/my-post',
  getBookmark: 'bookmark',
  deleteBookmark: 'bookmark/remove',
  getDetailPost: 'post/detail',
  // getDetailPost: (postId) => `post/detail/${postId}`,
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};

export const ping = () => callAPI(urls.ping, 'get');

export const register = (dataUser) => callAPI(urls.register, 'POST', {}, {}, dataUser);
export const login = (dataUser) => callAPI(urls.login, 'POST', {}, {}, dataUser);
export const createPost = (dataPost) =>
  callAPI(urls.post, 'POST', { 'Content-Type': 'multipart/form-data' }, {}, dataPost);
export const getPost = () => callAPI(urls.getPost, 'GET');
export const createBookmark = (data) => callAPI(urls.createBookmark, 'POST', {}, {}, data);
export const getProfile = () => callAPI(urls.getProfile, 'GET');
export const getMyPost = () => callAPI(urls.getMyPost, 'GET');
export const getBookmark = () => callAPI(urls.getBookmark, 'GET');
export const deleteBookmark = (bookmarkId) => callAPI(`${urls.deleteBookmark}/${bookmarkId}`, 'DELETE');
export const getDetailPost = (postId) => callAPI(`${urls.getDetailPost}/${postId}`, 'GET');
// export const getDetailPost = () => callAPI(urls.getDetailPost, 'GET');

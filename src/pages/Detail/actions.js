import { SET_DETAIL_POST, GET_DETAIL_POST } from './constants';

export const setDetailPost = (post) => ({
  type: SET_DETAIL_POST,
  post,
});

export const getDetailPost = (postId) => ({
  type: GET_DETAIL_POST,
  postId,
});

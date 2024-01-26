import { SET_POST, GET_POST, CREATE_BOOKMARK } from './constants';

export const setPost = (posts) => ({
  type: SET_POST,
  posts,
});

export const getPost = () => ({
  type: GET_POST,
});

export const createBookmark = (bookmark) => ({
  type: CREATE_BOOKMARK,
  bookmark,
});

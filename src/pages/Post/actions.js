import { CREATE_POST } from './constants';

export const createPost = (dataPost, callback) => ({
  type: CREATE_POST,
  dataPost,
  callback,
});

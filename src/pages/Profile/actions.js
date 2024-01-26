import { GET_MY_POST, GET_PROFILE, SET_MY_POST, SET_PROFILE } from './constants';

export const setProfile = (profile) => ({
  type: SET_PROFILE,
  profile,
});

export const getProfile = () => ({
  type: GET_PROFILE,
});

export const setMyPost = (myPost) => ({
  type: SET_MY_POST,
  myPost,
});

export const getMyPost = () => ({
  type: GET_MY_POST,
});

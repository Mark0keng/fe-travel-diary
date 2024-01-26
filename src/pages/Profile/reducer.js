import { produce } from 'immer';

import { SET_PROFILE, SET_MY_POST } from './constants';

export const initialState = {
  profile: {},
  myPost: [],
};

export const storedKey = ['profile', 'myPost'];

const profileReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_PROFILE:
        draft.profile = action.profile;
        break;
      case SET_MY_POST:
        draft.myPost = action.myPost;
        break;
    }
  });

export default profileReducer;

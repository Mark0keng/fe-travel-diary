import { produce } from 'immer';

import { CREATE_POST } from './constants';

export const initialState = {
  post: {},
};

export const storedKey = ['register'];

const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_POST:
        draft.post = action.post;
        break;
    }
  });

export default postReducer;

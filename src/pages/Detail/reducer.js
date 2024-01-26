import { produce } from 'immer';

import { SET_DETAIL_POST } from './constants';

export const initialState = {
  detailPost: {},
};

export const storedKey = ['detailPost'];

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_DETAIL_POST:
        draft.detailPost = action.detailPost;
        break;
    }
  });

export default detailReducer;

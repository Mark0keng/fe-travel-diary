import { produce } from 'immer';

import { SET_BOOKMARK } from './constants';

export const initialState = {
  bookmarks: null,
};

export const storedKey = ['bookmarks'];

const bookmarkReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_BOOKMARK:
        draft.bookmarks = action.bookmarks;
        break;
    }
  });

export default bookmarkReducer;

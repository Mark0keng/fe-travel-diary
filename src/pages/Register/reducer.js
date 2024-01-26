import { produce } from 'immer';

import { REGISTER } from './constants';

export const initialState = {
  register: {},
};

export const storedKey = ['register'];

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REGISTER:
        draft.register = action.register;
        break;
    }
  });

export default registerReducer;

import { produce } from 'immer';

import { LOGIN } from './constants';

export const initialState = {
  login: {},
};

export const storedKey = ['login'];

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN:
        draft.login = action.login;
        break;
    }
  });

export default loginReducer;

import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import languageReducer from '@containers/Language/reducer';

import homeReducer, { storedKey as storedHomeState } from '@pages/Home/reducer';
import loginReducer, { storedKey as storedLoginState } from '@pages/Login/reducer';
import registerReducer, { storedKey as storedRegisterState } from '@pages/Register/reducer';
import postReducer, { storedKey as storedPostState } from '@pages/Post/reducer';
import profileReducer, { storedKey as storedProfileState } from '@pages/Profile/reducer';
import bookmarkReducer, { storedKey as storedBookmarkState } from '@pages/Bookmark/reducer';
import detailReducer, { storedKey as storedDetailState } from '@pages/Detail/reducer';
import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  home: { reducer: homeReducer, whitelist: storedHomeState },
  register: { reducer: registerReducer, whitelist: storedRegisterState },
  login: { reducer: loginReducer, whitelist: storedLoginState },
  post: { reducer: postReducer, whitelist: storedPostState },
  profile: { reducer: profileReducer, whitelist: storedProfileState },
  bookmark: { reducer: bookmarkReducer, whitelist: storedBookmarkState },
  detail: { reducer: detailReducer, whitelist: storedDetailState },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;

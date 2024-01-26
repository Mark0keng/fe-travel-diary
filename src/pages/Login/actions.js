import { LOGIN } from './constants';

export const login = (dataUser, callback) => ({
  type: LOGIN,
  dataUser,
  callback,
});

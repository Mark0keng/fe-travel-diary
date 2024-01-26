import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { login } from '@domain/api';
import { setLogin, setToken } from '@containers/Client/actions';
import { LOGIN } from './constants';

function* doLogin({ dataUser, callback }) {
  yield put(setLoading(true));
  try {
    const { data } = yield call(login, dataUser);
    yield put(setLogin(true));
    yield put(setToken(data.token));
    callback && callback();
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* loginSaga() {
  yield takeLatest(LOGIN, doLogin);
}

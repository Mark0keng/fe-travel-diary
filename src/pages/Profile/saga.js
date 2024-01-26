import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getMyPost, getProfile } from '@domain/api';
import { setMyPost, setProfile } from './actions';
import { GET_MY_POST, GET_PROFILE } from './constants';

function* doGetProfile() {
  yield put(setLoading(true));
  try {
    const { data } = yield call(getProfile);
    yield put(setProfile(data.profile));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

function* doGetMyPost() {
  yield put(setLoading(true));
  try {
    const { data } = yield call(getMyPost);
    console.log(data);
    yield put(setMyPost(data));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* profileSaga() {
  yield takeLatest(GET_PROFILE, doGetProfile);
  yield takeLatest(GET_MY_POST, doGetMyPost);
}

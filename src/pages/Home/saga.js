import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { createBookmark, getPost } from '@domain/api';
import { setPost } from './actions';
import { CREATE_BOOKMARK, GET_POST } from './constants';

function* doGetPost() {
  yield put(setLoading(true));
  try {
    const { data } = yield call(getPost);
    yield put(setPost(data));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

function* doCreateBookmark({ bookmark }) {
  yield put(setLoading(true));
  try {
    yield call(createBookmark, bookmark);
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* homeSaga() {
  yield takeLatest(GET_POST, doGetPost);
  yield takeLatest(CREATE_BOOKMARK, doCreateBookmark);
}

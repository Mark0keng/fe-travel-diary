import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { deleteBookmark, getBookmark } from '@domain/api';
import { DELETE_BOOKMARK, GET_BOOKMARK } from './constants';
import { setBookmark } from './actions';

function* doGetBookmark() {
  yield put(setLoading(true));
  try {
    const { data } = yield call(getBookmark);
    yield put(setBookmark(data));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

function* doDeleteBookmark({ bookmarkId }) {
  yield put(setLoading(true));
  try {
    yield call(deleteBookmark, bookmarkId);
    yield doGetBookmark();
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* bookmarkSaga() {
  yield takeLatest(GET_BOOKMARK, doGetBookmark);
  yield takeLatest(DELETE_BOOKMARK, doDeleteBookmark);
}

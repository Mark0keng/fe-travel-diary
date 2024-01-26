import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { createPost } from '@domain/api';
import { CREATE_POST } from './constants';

function* doCreatePost({ dataPost, callback }) {
  yield put(setLoading(true));
  try {
    yield call(createPost, dataPost);
    callback && callback();
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* postSaga() {
  yield takeLatest(CREATE_POST, doCreatePost);
}

import { takeLatest, call, put } from 'redux-saga/effects';
import { setLoading } from '@containers/App/actions';
import { getDetailPost } from '@domain/api';
import { GET_DETAIL_POST } from './constants';
import { setDetailPost } from './actions';

function* doGetDetailPost({ postId }) {
  yield put(setLoading(true));
  try {
    // console.log(postId);
    const { data } = yield call(getDetailPost, postId);
    console.log(data);
    yield put(setDetailPost(data));
  } catch (error) {
    console.log(error);
  }
  yield put(setLoading(false));
}

export default function* detailSaga() {
  yield takeLatest(GET_DETAIL_POST, doGetDetailPost);
}

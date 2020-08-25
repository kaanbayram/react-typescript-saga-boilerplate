import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchPosts } from "../services/postsServices";
import * as actionCreators from "../actionCreators/postsActionCreators";
import * as actionTypes from "../actionTypes/postsActionTypes";

function* onLoadPosts({ posts, id }: actionTypes.GetPostsAction) {
  console.log("onloadPosts: "+posts+id);
  try {
    yield put(actionCreators.getPostsRequest());
    const { data } = yield call(fetchPosts, posts, id);
    yield console.log(data);
    yield put(actionCreators.getPostsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getPostsFailure(error.response.data.error));
  }
}

function* watchOnLoadPosts() {
  yield takeEvery(actionTypes.GET_POSTS, onLoadPosts);
}

export default function* postsSaga() {
  yield all([fork(watchOnLoadPosts)]);
}

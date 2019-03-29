import { put, call, take } from "redux-saga/effects"
import { getNewsRequest, getNewsSuccess, getNewsFailure } from "../../ducks/news"
import { PostsApi } from "../../api"

export function* postsLoadWatcher() {
  while (true) {
    yield take(getNewsRequest.toString())

    try {
      const { data } = yield call(PostsApi.getPosts)
      yield put(getNewsSuccess({ data }))
    } catch (error) {
      console.log(error)
      yield put(getNewsFailure())
    }
  }
}

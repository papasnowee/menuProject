import { put, call, take } from 'redux-saga/effects'
import { getAlbumsRequest, getAlbumsSuccess, getAlbumsFailure } from '../../ducks/albums'
import { PostsApi } from '../../api'

export function* postsLoadWatcher() {
  while (true) {
    yield take(getAlbumsRequest.toString())

    try {
      const { data } = yield call(PostsApi.getPosts)
      yield put(getAlbumsSuccess({ data }))
    } catch (error) {
      console.log(error)
      yield put(getAlbumsFailure())
    }
  }
}

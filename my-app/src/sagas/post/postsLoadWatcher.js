import { put, call, take } from 'redux-saga/effects'
import { getNewsRequest, getNewsSuccess, getNewsFailure } from '../../ducks/news'
import { getAlbumsRequest, getAlbumsSuccess, getAlbumsFailure } from '../../ducks/albums'
import { PostsApi, AlbumsApi } from '../../api'

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

export function* postsLoadWatcherAlbums() {
  while (true) {
    yield take(getAlbumsRequest.toString())

    try {
      const { data } = yield call(AlbumsApi.getAlbums)
      yield put(getAlbumsSuccess({ data }))
    } catch (error) {
      console.log(error)
      yield put(getAlbumsFailure())
    }
  }
}

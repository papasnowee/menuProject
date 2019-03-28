import { put, call, take } from "redux-saga/effects"
import { getAlbumsRequest, getAlbumsSuccess, getAlbumsFailure } from "../../ducks/albums"
import { AlbumsApi } from "../../api"

export function* albumsLoadWatcher() {
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

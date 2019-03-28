import { fork, all } from 'redux-saga/effects'
import { postsLoadWatcher } from './post'
import { albumsLoadWatcher } from './albums'

function* rootSaga() {
  yield all([fork(postsLoadWatcher), fork(albumsLoadWatcher)])
}

export default rootSaga

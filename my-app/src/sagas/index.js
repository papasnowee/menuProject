import { fork, all } from 'redux-saga/effects'
import { postsLoadWatcher } from './post'

function* rootSaga() {
  yield all([fork(postsLoadWatcher)])
}

export default rootSaga

import { fork, all } from "redux-saga/effects"
import { postsLoadWatcher } from "./post"
import { albumsLoadWatcher } from "./albums"
import { usersLoadWatcher } from "./users"

function* rootSaga() {
  yield all([fork(postsLoadWatcher), fork(albumsLoadWatcher)], fork(usersLoadWatcher))
}

export default rootSaga

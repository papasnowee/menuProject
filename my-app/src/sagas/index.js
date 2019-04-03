import { fork, all } from "redux-saga/effects"
import { postsLoadWatcher } from "./post"
import { albumsLoadWatcher } from "./albums"
import { usersLoadWatcher } from "./users"
import routerLoadWatcher from "./router"

function* rootSaga() {
  yield all([
    fork(postsLoadWatcher),
    fork(albumsLoadWatcher),
    fork(usersLoadWatcher),
    fork(routerLoadWatcher),
  ])
}

export default rootSaga

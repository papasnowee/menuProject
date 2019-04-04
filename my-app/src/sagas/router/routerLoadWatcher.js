import { put, take, select, call, all } from "redux-saga/effects"
import { routeRendered } from "../../ducks/router"
import { routesNormalized } from "../../router"

function* routerLoadWatcher() {
  while (true) {
    const {
      payload: { id, path },
    } = yield take(routeRendered.toString())
    const { effects = null } = routesNormalized[id]
    if (path == "/users/page=" + numberUsersPage) {
    }

    if (effects) {
      const selectors = yield all(effects.map(({ selector: s }) => select(s)))

      yield all(
        selectors.map((s, i) => {
          if (!s) return put(effects[i].effect())
        })
      )
    }
  }
}

export default routerLoadWatcher

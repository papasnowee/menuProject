import { put, take, select, all } from "redux-saga/effects"
import { routeRendered } from "../../ducks/router"
import { routesNormalized } from "../../router"

function* routerLoadWatcher() {
  while (true) {
    const {
      payload: { id, param },
    } = yield take(routeRendered.toString())

    console.log("routerLoadWatcher param = ", param)
    const { effects = null } = routesNormalized[id]

    if (effects) {
      const selectors = yield all(effects.map(({ selector: s }) => select(s)))
      // if (!numberUsersPage) numberUsersPage == null
      yield all(
        selectors.map((s, i) => {
          // if (!s) return put(effects[i].effect(numberUsersPage))
          if (!s) return put(effects[i].effect({ param }))
        })
      )
    }
  }
}

export default routerLoadWatcher

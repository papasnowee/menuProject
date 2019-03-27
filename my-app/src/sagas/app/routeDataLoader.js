import { put, select, take, all, cancel } from 'redux-saga/effects'
import { routeRendered, getRouterLoacation } from '../../ducks/router'
import { getCurrentRouterFromKey } from '../../router'

function* routerLoadWather() {
  while (true) {
    const {
      payload: { key },
    } = yield take(routeRendered.toString())

    try {
      const location = yield select(getRouterLoacation)

      const route = yield getCurrentRouterFromKey(key, location, true)

      if (typeof route === 'undefined') yield cancel()

      const { effects } = route

      if (effects) {
        const selectors = yield all(
          effects.map(({ selector: s = true }) => (s !== null ? select(s) : false))
        )

        yield all(
          selectors.map((s, i) => {
            if (!s)
              return Array.isArray(effects[i]['action'])
                ? e.map(e => put(e()))
                : put(effects[i]['action']())
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default routerLoadWather

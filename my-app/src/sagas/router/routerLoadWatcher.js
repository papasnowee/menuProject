import { put, take, select, all } from "redux-saga/effects"
import { routeRendered } from "../../ducks/router"
import { routesNormalized } from "../../router"

function* routerLoadWatcher() {
  try {
    while (true) {
      let {
        payload: { id },
      } = yield take(routeRendered.toString())

      let { effects = null } = routesNormalized[id]

      while (effects === "extends") {
        // на случай, если большая вложенность в routes и extends не только у ребенка , но и у родителя и т.д.

        for (let i = id.length - 2; i > 0; i--) {
          // цикл который обрезает строку id до айди родителя
          if (id[i] === "-") id = id.substring(0, i) // пример изменения id: '2-1-2' --> '2-1'
        }
        effects = routesNormalized[id].effects
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
  } catch (error) {
    console.log(error)
  }
}

export default routerLoadWatcher

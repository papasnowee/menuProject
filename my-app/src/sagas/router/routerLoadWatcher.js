import { put, take, select, all } from "redux-saga/effects"
import { routeRendered } from "../../ducks/router"
import { routesNormalized } from "../../router"
import createImmutableSelector from "create-immutable-selector"

function* routerLoadWatcher() {
  try {
    while (true) {
      let {
        payload: { id },
      } = yield take(routeRendered.toString())
      let { effects = null } = routesNormalized[id]
      console.log("effects = ", effects)
      while (effects === "extends") {
        // на случай, если большая вложенность в routes и extends не только у ребенка , но и у родителя и т.д.
        console.log("effects = ", effects)
        for (let i = id.length - 2; i > 0; i--) {
          // цикл который обрезает строку id до айди родителя
          if (id[i] === "-") id = id.substring(0, i) // пример изменения id: '2-1-2' --> '2-1'
        }
        effects = routesNormalized[id].effects
      }
      if (routesNormalized[id].searchParamName) {
        const searchParamName = routesNormalized[id].searchParamName
        const getRouteReducerSearch = createImmutableSelector(
          state => state.getIn(["routerReducer", "location", "search"]),
          substate => substate
        )
        const search = yield select(getRouteReducerSearch)
        console.log("search", search)
        const paramsFromUrl = new URLSearchParams(search)

        const map = {}
        const mapper = p => (map[p] = paramsFromUrl.get(p))
        const param = Array.isArray(searchParamName)
          ? searchParamName.forEach(mapper)
          : paramsFromUrl.get(searchParamName)

        const selectors = yield all(effects.map(({ selector: s }) => select(s(param))))
        console.log("selectors", selectors)
        console.log("effects", effects) // есть
        yield all(
          selectors.map((s, i) => {
            if (!s) return put(effects[i].effect({ param }))
          })
        )
      } else {
        const selectors = yield all(effects.map(({ selector: s }) => select(s)))
        console.log("selectors", selectors)
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

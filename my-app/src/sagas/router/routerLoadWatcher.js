import { put, take, select, all } from "redux-saga/effects"
import { routeRendered } from "../../ducks/router"
import { routesNormalized } from "../../router"

function* routerLoadWatcher() {
  while (true) {
    const {
      payload: { id },
    } = yield take(routeRendered.toString())

    const { effects = null } = routesNormalized[id]

    console.log(route)

    // по айди беру из плоской структуры объект, из этого объекта беру эффектс
    // из эффектов беру селекторы
    //select(effects[0]['selector'])
    //put(effects[0]['action']())
  }
}

export default routerLoadWatcher

import { put, take, select, call } from "redux-saga/effects"
import { routeRendered } from "../../ducks/router"
import { routesNormalized } from "../../router"
import { AlbumsApi } from "../../api"

function* routerLoadWatcher() {
  while (true) {
    const {
      payload: { id },
    } = yield take(routeRendered.toString())
    console.log("id v routerLoadWatcher = ", id)
    try {
      const { effects = null } = routesNormalized[id]
      console.log("effects =", effects[0])
      !effects.selector ? yield put(effects[0].effect()) : null
    } catch (error) {
      console.log(error)
      yield put("как то вычислить название экшена")
    }

    // по айди беру из плоской структуры объект, из этого объекта беру эффектс
    // из эффектов беру селекторы
    //select(effects[0]['selector'])
    //put(effects[0]['action']())
  }
}

export default routerLoadWatcher

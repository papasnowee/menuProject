import { all, fork } from 'redux-saga/effects'
import initialLoad from './initialLoad'
import routeDataLoader from './routeDataLoader'
import searchWatcher from './searchWatcher'
import { logsLoadWatcher, logsUpdateWatcher } from './logsLoad'

function* appRootSaga() {
  yield all([
    fork(initialLoad),
    fork(searchWatcher),
    fork(logsLoadWatcher),
    fork(logsUpdateWatcher),
  ])
}

/**
 * appRootSaga обслуживает служебные эффекты
 * загрузка общих данных, оповещения, модальные окна
 */

export default appRootSaga
export * from './initialLoad'
export * from './logsLoad'
export { routeDataLoader }

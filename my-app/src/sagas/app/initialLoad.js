import { put, fork } from 'redux-saga/effects'
import { getUserStorage, isUserAuthStorage } from '../../storages'
import { userLoginSuccess, userPermissionRequest } from '../../ducks/user'
import {
  appInitialDataRequest,
  appInitialDataSuccess,
  appInitialDataFailure,
} from '../../ducks/app'
import routeDataLoader from './routeDataLoader'
import { userResourcesWatcher } from '../user'

function* initialRootSaga() {
  try {
    const isUserLogin = yield isUserAuthStorage()

    if (isUserLogin) {
      yield put(appInitialDataRequest())
      const userData = yield getUserStorage()
      yield put(userLoginSuccess({ data: userData }))
      yield fork(userResourcesWatcher)
      yield put(userPermissionRequest())
      yield put(appInitialDataSuccess())
      yield fork(routeDataLoader)
    } else {
      yield put(appInitialDataFailure())
    }
  } catch (error) {
    console.log(error)
  }
}

export default initialRootSaga

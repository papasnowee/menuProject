import { put, call, takeEvery, select } from 'redux-saga/effects'
import {
  getEnvListRequest,
  getEnvListSuccess,
  getEnvListFailure,
  getEnvListUpdate,
} from '../../ducks/env'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* envListLoadSaga() {
  try {
    yield put(getEnvListRequest())
    const sessionId = yield select(getSessionId)
    const res = yield call(envAPI.getList, { sessionId })
    yield put(getEnvListSuccess({ data: res.data.data }))
  } catch (error) {
    yield put(getEnvListFailure())
    console.log(error)
  }
}

function* envListUpdateWatcher() {
  yield takeEvery(getEnvListUpdate.toString(), envListLoadSaga)
}

export { envListUpdateWatcher, envListLoadSaga }

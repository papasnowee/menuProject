import { put, call, select, takeEvery } from 'redux-saga/effects'
import {
  getEnvTemplatesRequest,
  getEnvTemplatesSuccess,
  getEnvTemplatesFailure,
  getEnvTemplatesUpdate,
} from '../../ducks/env'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* envTemplatesLoadSaga() {
  try {
    yield put(getEnvTemplatesRequest())
    const sessionId = yield select(getSessionId)
    const res = yield call(envAPI.getTemplatesEnv, { sessionId })
    yield put(getEnvTemplatesSuccess({ data: res.data.data }))
  } catch (error) {
    yield put(getEnvTemplatesFailure())
  }
}

function* envTemplatesUpdateWatcher() {
  yield takeEvery(getEnvTemplatesUpdate.toString(), envTemplatesLoadSaga)
}

export { envTemplatesUpdateWatcher, envTemplatesLoadSaga }

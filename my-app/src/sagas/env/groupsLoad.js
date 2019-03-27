import { put, call, takeEvery, select } from 'redux-saga/effects'
import {
  getEnvGroupRequest,
  getEnvGroupSuccess,
  getEnvGroupFailure,
  getEnvGroupUpdate,
} from '../../ducks/env'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* envGroupsLoadSaga() {
  try {
    yield put(getEnvGroupRequest())
    const sessionId = yield select(getSessionId)
    const res = yield call(envAPI.getEnvGroups, { sessionId })
    yield put(getEnvGroupSuccess({ data: res.data.data }))
  } catch (error) {
    yield put(getEnvGroupFailure())
  }
}

function* envGroupsUpdateWatcher() {
  yield takeEvery(getEnvGroupUpdate.toString(), envGroupsLoadSaga)
}

export { envGroupsUpdateWatcher, envGroupsLoadSaga }

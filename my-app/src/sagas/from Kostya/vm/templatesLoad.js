import { put, call, takeEvery, select } from 'redux-saga/effects'
import {
  getVmTemplatesRequest,
  getVmTemplatesSuccess,
  getVmTemplatesFailure,
  getVmTemplatesUpdate,
} from '../../ducks/vm'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* vmTemplatesLoadSaga() {
  try {
    yield put(getVmTemplatesRequest())
    const sessionId = yield select(getSessionId)
    const res = yield call(envAPI.getTemplatesVM, { sessionId })
    yield put(getVmTemplatesSuccess({ data: res.data.data }))
  } catch (error) {
    yield put(getVmTemplatesFailure())
  }
}

function* vmTemplatesUpdateWatcher() {
  yield takeEvery(getVmTemplatesUpdate.toString(), vmTemplatesLoadSaga)
}

export { vmTemplatesUpdateWatcher, vmTemplatesLoadSaga }

import { put, call, takeEvery } from 'redux-saga/effects'
import {
  vmImagesRequest,
  vmImagesSuccess,
  vmImagesFailure,
  vmImagesUpdate,
} from '../../ducks/vm'
import { envAPI } from '../../api'

function* vmImagesLoadSaga() {
  try {
    yield put(vmImagesRequest())
    const res = yield call(envAPI.getImagesVM)
    yield put(vmImagesSuccess({ data: res.data.data }))
  } catch (error) {
    yield put(vmImagesFailure())
  }
}

function* vmImagesUpdateWatcher() {
  yield takeEvery(vmImagesUpdate.toString(), vmImagesLoadSaga)
}

export { vmImagesUpdateWatcher, vmImagesLoadSaga }

import { put, call, take, select } from "redux-saga/effects"
import {
  getLogsRequest,
  getLogsSuccess,
  getLogsFailure,
  getLogsUpdate,
} from "../../ducks/app/logs"
import { getSessionId } from "../../ducks/user"
import { logsAPI } from "../../api"

function* logsLoadWatcher() {
  while (true) {
    const {
      payload: { logsType, limit = 30, offset = 0, ...params },
    } = yield take(getLogsRequest.toString())

    const api = {
      technical: logsAPI.getTechnical,
      business: logsAPI.getBusiness,
    }

    try {
      const sessionId = yield select(getSessionId)
      const res = yield call(api[logsType], {
        sessionId,
        limit,
        offset,
        ...params,
      })
      yield put(getLogsSuccess({ data: res.data.data, logsType }))
    } catch (error) {
      yield put(getLogsFailure())
    }
  }
}

function* logsUpdateWatcher() {
  while (true) {
    const {
      payload: { logsType },
    } = yield take(getLogsUpdate.toString())
    yield put(getLogsRequest({ logsType }))
  }
}

export { logsUpdateWatcher, logsLoadWatcher }

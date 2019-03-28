import { put, call, take, select } from 'redux-saga/effects'
import {
  deleteEnvGroupRequest,
  deleteEnvGroupSuccess,
  deleteEnvGroupFailure,
} from '../../ducks/env'
import { appNotificationShow } from '../../ducks/app/'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* deleteEnvGroupWatcher() {
  while (true) {
    const {
      payload: { ids },
    } = yield take(deleteEnvGroupRequest.toString())

    const sessionId = yield select(getSessionId)
    const items = ids.map(id => ({ id, recState: 'Delete' }))
    const isMore = ids.length > 1

    try {
      yield put(
        appNotificationShow({
          title: `Групп${
            isMore ? 'ы' : 'а'
          } тестостовых сред в процессе удаления`,
        })
      )

      yield call(envAPI.setEnvGroups, { items, sessionId })

      yield put(deleteEnvGroupSuccess({ ids }))

      yield put(
        appNotificationShow({
          title: `Групп${isMore ? 'ы' : 'а'} тестостовых сред успешно удален${
            isMore ? 'ы' : 'а'
          }`,
        })
      )
    } catch (error) {
      yield put(deleteEnvGroupFailure())

      yield put(
        appNotificationShow({
          title: error.message
            ? error.message
            : `Ошибка удаления групп${isMore ? '' : 'ы'} тестовых сред`,
          status: 'error',
        })
      )
    }
  }
}

export default deleteEnvGroupWatcher

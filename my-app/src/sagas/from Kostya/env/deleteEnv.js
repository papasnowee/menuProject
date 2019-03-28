import { put, call, take, select } from 'redux-saga/effects'
import {
  deleteEnvListRequest,
  deleteEnvListSuccess,
  deleteEnvListFailure,
} from '../../ducks/env'
import { appNotificationShow } from '../../ducks/app/'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* deleteEnvItemWatcher() {
  while (true) {
    const {
      payload: { ids },
    } = yield take(deleteEnvListRequest.toString())

    const sessionId = yield select(getSessionId)
    const items = ids.map(id => ({ id, recState: 'Delete' }))
    const isMore = ids.length > 1

    try {
      yield put(
        appNotificationShow({
          title: `Тестостов${isMore ? 'ые' : 'ая'} сред${
            isMore ? 'ы' : 'а'
          } в процессе удаления`,
        })
      )

      yield call(envAPI.setEnv, { items, sessionId })

      yield put(deleteEnvListSuccess({ ids }))

      yield put(
        appNotificationShow({
          title: `Тестостов${isMore ? 'ые' : 'ая'} сред${
            isMore ? 'а' : 'ы'
          } успешно удален${isMore ? 'ы' : 'а'}`,
        })
      )
    } catch (error) {
      yield put(deleteEnvListFailure())

      yield put(
        appNotificationShow({
          title: error.message
            ? error.message
            : `Ошибка удаления тестов${isMore ? 'ых' : 'ой'} сред${
                isMore ? '' : 'ы'
              }`,
          status: 'error',
        })
      )
    }
  }
}

export default deleteEnvItemWatcher

import { put, call, take, select } from 'redux-saga/effects'
import {
  deleteEnvTemplateRequest,
  deleteEnvTemplateSuccess,
  deleteEnvTemplateFailure,
} from '../../ducks/env'
import { appNotificationShow } from '../../ducks/app/'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* deleteEnvTempalteWatcher() {
  while (true) {
    const {
      payload: { ids },
    } = yield take(deleteEnvTemplateRequest.toString())

    const sessionId = yield select(getSessionId)
    const items = ids.map(id => ({ id, recState: 'Delete' }))
    const isMore = ids.length > 1

    try {
      yield put(
        appNotificationShow({
          title: `Шаблон${
            isMore ? 'ы' : ''
          } тестостовой среды в процессе удаления`,
        })
      )

      yield call(envAPI.setTemplateEnv, { items, sessionId })

      yield put(deleteEnvTemplateSuccess({ ids }))

      yield put(
        appNotificationShow({
          title: `Шаблон${isMore ? 'ы' : ''} тестостовой среды успешно удален${
            isMore ? 'ы' : ''
          }`,
        })
      )
    } catch (error) {
      yield put(deleteEnvTemplateFailure())

      yield put(
        appNotificationShow({
          title: error.message
            ? error.message
            : `Ошибка удаления тестов${isMore ? 'ой' : 'ых'} сред${
                isMore ? 'ы' : ''
              }`,
          status: 'error',
        })
      )
    }
  }
}

export default deleteEnvTempalteWatcher

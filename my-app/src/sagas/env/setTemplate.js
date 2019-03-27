import { put, call, take, select } from 'redux-saga/effects'
import {
  setEnvTemplateRequest,
  setEnvTemplateSuccess,
  setEnvTemplateFailure,
} from '../../ducks/env'
import {
  getFormSuccess,
  getFormFailure,
  getFormReset,
} from '../../ducks/app/forms'
import { appNotificationShow } from '../../ducks/app/'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* setEnvTemplateWatcher() {
  while (true) {
    const {
      payload: { env, recState, formId },
    } = yield take(setEnvTemplateRequest.toString())

    const act = {
      Insert: 'создания',
      Update: 'обновления',
    }

    try {
      const sessionId = yield select(getSessionId)

      yield put(
        appNotificationShow({
          title: `Шаблон тестовой среды в процессе ${act[recState]}`,
        })
      )

      yield call(envAPI.setTemplateEnv, {
        items: [Object.assign(env, { recState })],
        sessionId,
      })

      const {
        data: { data: resEnv },
      } = yield call(envAPI.getTemplatesEnv, {
        filter: { ids: [env.id] },
        sessionId,
      })

      yield put(
        setEnvTemplateSuccess({
          data: resEnv,
          recState,
        })
      )

      const _act = {
        Insert: 'создан',
        Update: 'обновлен',
      }

      yield put(
        appNotificationShow({
          title: `Шаблон тестовой среды успешно ${_act[recState]}`,
        })
      )

      yield put(getFormSuccess({ id: formId }))
    } catch (error) {
      yield put(setEnvTemplateFailure())

      yield put(
        appNotificationShow({
          title: error.message
            ? error.message
            : `Ошибка ${act[recState]} шаблона тестовой среды`,
          status: 'error',
        })
      )

      yield put(
        getFormFailure({
          id: formId,
        })
      )
    } finally {
      yield put(getFormReset({ id: formId }))
    }
  }
}

export default setEnvTemplateWatcher

import { put, call, take, select } from 'redux-saga/effects'
import {
  setEnvListRequest,
  setEnvListSuccess,
  setEnvListFailure,
} from '../../ducks/env'
import {
  getFormSuccess,
  getFormFailure,
  getFormReset,
} from '../../ducks/app/forms'
import { appNotificationShow } from '../../ducks/app/'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* setEnvItemWatcher() {
  while (true) {
    const {
      payload: { env, envs, recState, formId, notifications },
    } = yield take(setEnvListRequest.toString())

    const act = {
      Insert: 'создания',
      Update: 'обновления',
    }

    try {
      const sessionId = yield select(getSessionId)

      yield put(
        appNotificationShow({
          title: notifications
            ? notifications['request']
            : `Тестовая среда в процессе ${act[recState]}`,
        })
      )

      yield call(envAPI.setEnv, {
        items: envs || [Object.assign(env, { recState })],
        sessionId,
      })

      const {
        data: { data: resEnv },
      } = yield call(envAPI.getList, {
        filter: { ids: envs ? envs.map(e => e.id) : [env.id] },
        sessionId,
      })

      yield put(
        setEnvListSuccess({
          data: resEnv,
          recState,
        })
      )

      const _act = {
        Insert: 'создана',
        Update: 'обновлена',
      }

      yield put(
        appNotificationShow({
          title: notifications
            ? notifications['success']
            : `Тестовая среда успешно ${_act[recState]}`,
        })
      )

      yield put(getFormSuccess({ id: formId }))
    } catch (error) {
      yield put(setEnvListFailure())

      yield put(
        appNotificationShow({
          title: error.message
            ? error.message
            : notifications
            ? notifications['failure']
            : `Ошибка ${act[recState]} тестовой среды`,
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

export default setEnvItemWatcher

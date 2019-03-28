import { put, call, take, select } from 'redux-saga/effects'
import {
  setEnvGroupRequest,
  setEnvGroupSuccess,
  setEnvGroupFailure,
} from '../../ducks/env'
import {
  getFormSuccess,
  getFormFailure,
  getFormReset,
} from '../../ducks/app/forms'
import { appNotificationShow } from '../../ducks/app/'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* setEnvGroupWatcher() {
  while (true) {
    const {
      payload: { group, recState, formId },
    } = yield take(setEnvGroupRequest.toString())

    const act = {
      Insert: 'создания',
      Update: 'обновления',
    }

    try {
      const sessionId = yield select(getSessionId)

      yield put(
        appNotificationShow({
          title: `Группа тестовой среды в процессе ${act[recState]}`,
        })
      )

      yield call(envAPI.setEnvGroups, {
        items: [Object.assign(group, { recState })],
        sessionId,
      })

      const {
        data: { data: resGroup },
      } = yield call(envAPI.getEnvGroups, {
        filter: { ids: [group.id] },
        sessionId,
      })

      yield put(
        setEnvGroupSuccess({
          data: resGroup,
          recState,
        })
      )

      const _act = {
        Insert: 'создана',
        Update: 'обновлена',
      }

      yield put(
        appNotificationShow({
          title: `Группа тестовой среды успешно ${_act[recState]}`,
        })
      )

      yield put(getFormSuccess({ id: formId }))
    } catch (error) {
      yield put(setEnvGroupFailure())

      yield put(
        appNotificationShow({
          title: error.message
            ? error.message
            : `Ошибка ${act[recState]} группы тестовой среды`,
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

export default setEnvGroupWatcher

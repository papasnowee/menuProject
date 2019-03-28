import { put, call, take, select } from 'redux-saga/effects'
import {
  setVmTemplateRequest,
  setVmTemplateSuccess,
  setVmTemplateFailure,
} from '../../ducks/vm'
import {
  getFormSuccess,
  getFormFailure,
  getFormReset,
} from '../../ducks/app/forms'
import { appNotificationShow } from '../../ducks/app/'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* setVmTemplateWatcher() {
  while (true) {
    const {
      payload: { vmTmp, recState, formId },
    } = yield take(setVmTemplateRequest.toString())

    const act = {
      Insert: 'создания',
      Update: 'обновления',
    }

    try {
      const sessionId = yield select(getSessionId)

      yield put(
        appNotificationShow({
          title: `Шаблон виртуальной машины в процессе ${act[recState]}`,
        })
      )

      yield call(envAPI.setTemplateVM, {
        items: [vmTmp],
        sessionId,
      })

      const {
        data: { data: resVmTmp },
      } = yield call(envAPI.getTemplatesVM, {
        filter: { ids: [vmTmp.id] },
        sessionId,
      })

      yield put(setVmTemplateSuccess({ data: resVmTmp }))

      const _act = {
        Insert: 'создан',
        Update: 'обновлен',
      }

      yield put(
        appNotificationShow({
          title: `Шаблон виртуальной машины успешно ${_act[recState]}`,
        })
      )

      yield put(getFormSuccess({ id: formId }))
    } catch (error) {
      yield put(setVmTemplateFailure())

      yield put(
        appNotificationShow({
          title: error.message
            ? error.message
            : `Ошибка ${act[recState]} шаблона виртуальной машины`,
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

export default setVmTemplateWatcher

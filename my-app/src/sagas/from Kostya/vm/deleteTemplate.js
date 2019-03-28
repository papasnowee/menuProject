import { put, call, take, select } from 'redux-saga/effects'
import {
  deleteVmTemplateRequest,
  deleteVmTemplateSuccess,
  deleteVmTemplateFailure,
} from '../../ducks/vm'
import { appNotificationShow } from '../../ducks/app/'
import { getSessionId } from '../../ducks/user'
import { envAPI } from '../../api'

function* deleteVmTemplateWatcher() {
  while (true) {
    const {
      payload: { ids },
    } = yield take(deleteVmTemplateRequest.toString())

    const sessionId = yield select(getSessionId)
    const items = ids.map(id => ({ id, recState: 'Delete' }))
    const isMore = ids.length > 1

    try {
      yield put(
        appNotificationShow({
          title: `Шаблон${isMore ? 'ы' : ''} виртуальн${
            isMore ? 'ых' : 'ой'
          } машин${isMore ? '' : 'ы'} в процессе удаления`,
        })
      )

      yield call(envAPI.setTemplateVM, { items, sessionId })

      yield put(deleteVmTemplateSuccess({ ids }))

      yield put(
        appNotificationShow({
          title: `Шаблон${isMore ? 'ы' : ''} виртуальн${
            isMore ? 'ых' : 'ой'
          } машин${isMore ? '' : 'ы'} успешно удален${isMore ? 'ы' : ''}`,
        })
      )
    } catch (error) {
      yield put(deleteVmTemplateFailure())

      yield put(
        appNotificationShow({
          title: error.message
            ? error.message
            : `Ошибка удаления шаблон${isMore ? 'ов' : 'а'} виртуальн${
                isMore ? 'ых' : 'ой'
              } машин${isMore ? '' : 'ы'}`,
          status: 'error',
        })
      )
    }
  }
}

export default deleteVmTemplateWatcher

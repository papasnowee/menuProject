import { handleActions } from 'redux-actions'
import {
  appNotificationShow,
  appNotificationMoveToHistory,
  appNotificationRead,
  appNotificationClear,
} from './actions'
import { fromJS } from 'immutable'
import uuidv4 from 'uuid/v4'

const notificatiosInitial = fromJS({
  visible: {},
  history: {
    readed: {},
    noReaded: {},
  },
})

const notifications = handleActions(
  {
    [appNotificationShow]: (state, { payload }) => {
      const id = uuidv4()
      return state.setIn(['visible', id], { id, ...payload })
    },

    [appNotificationMoveToHistory]: (state, { payload: { id } }) => {
      const movedToHistory = state.getIn(['visible', id])
      return state
        .deleteIn(['visible', id])
        .setIn(['history', 'noReaded', id], movedToHistory)
    },

    [appNotificationRead]: (state, _action) => {
      const movedToNoReaded = state.getIn(['history', 'noReaded'])
      return state
        .setIn(['history', 'noReaded'], {})
        .mergeIn(['history', 'readed'], movedToNoReaded)
    },

    [appNotificationClear]: (_state, _action) => notificatiosInitial,
  },
  notificatiosInitial
)

export default notifications

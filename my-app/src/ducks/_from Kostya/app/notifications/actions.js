import { createActions } from 'redux-actions'

export const {
  appNotificationShow,
  appNotificationMoveToHistory,
  appNotificationRead,
  appNotificationClear,
} = createActions({
  APP_NOTIFICATION_SHOW: null,
  APP_NOTIFICATION_MOVE_TO_HISTORY: null,
  APP_NOTIFICATION_READ: null,
  APP_NOTIFICATION_CLEAR: null,
})

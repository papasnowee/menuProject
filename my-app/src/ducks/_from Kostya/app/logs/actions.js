import { createActions } from 'redux-actions'

export const {
  getLogsRequest,
  getLogsSuccess,
  getLogsFailure,
  getLogsUpdate,
  getLogsReset,
} = createActions({
  GET_LOGS_REQUEST: null,
  GET_LOGS_SUCCESS: null,
  GET_LOGS_FAILURE: null,
  GET_LOGS_UPDATE: null,
  GET_LOGS_RESET: null,
})

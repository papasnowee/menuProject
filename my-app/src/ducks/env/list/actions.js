import { createActions } from 'redux-actions'

export const {
  getEnvListRequest,
  getEnvListSuccess,
  getEnvListFailure,
  getEnvListUpdate,

  setEnvListRequest,
  setEnvListSuccess,
  setEnvListFailure,

  deleteEnvListRequest,
  deleteEnvListSuccess,
  deleteEnvListFailure,
} = createActions({
  GET_ENV_LIST_REQUEST: null,
  GET_ENV_LIST_SUCCESS: null,
  GET_ENV_LIST_FAILURE: null,
  GET_ENV_LIST_UPDATE: null,

  SET_ENV_LIST_REQUEST: null,
  SET_ENV_LIST_SUCCESS: null,
  SET_ENV_LIST_FAILURE: null,

  DELETE_ENV_LIST_REQUEST: null,
  DELETE_ENV_LIST_SUCCESS: null,
  DELETE_ENV_LIST_FAILURE: null,
})

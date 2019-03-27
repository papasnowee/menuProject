import { createActions } from 'redux-actions'

export const {
  getEnvGroupRequest,
  getEnvGroupSuccess,
  getEnvGroupFailure,
  getEnvGroupUpdate,

  setEnvGroupRequest,
  setEnvGroupSuccess,
  setEnvGroupFailure,

  deleteEnvGroupRequest,
  deleteEnvGroupSuccess,
  deleteEnvGroupFailure,
} = createActions({
  GET_ENV_GROUP_REQUEST: null,
  GET_ENV_GROUP_SUCCESS: null,
  GET_ENV_GROUP_FAILURE: null,
  GET_ENV_GROUP_UPDATE: null,

  SET_ENV_GROUP_REQUEST: null,
  SET_ENV_GROUP_SUCCESS: null,
  SET_ENV_GROUP_FAILURE: null,

  DELETE_ENV_GROUP_REQUEST: null,
  DELETE_ENV_GROUP_SUCCESS: null,
  DELETE_ENV_GROUP_FAILURE: null,
})

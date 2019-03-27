import { createActions } from 'redux-actions'

export const {
  getRolesRequest,
  getRolesSuccess,
  getRolesFailure,
  getRolesUpdate,

  setRolesRequest,
  setRolesSuccess,
  setRolesFailure,

  deleteRolesRequest,
  deleteRolesSuccess,
  deleteRolesFailure,
} = createActions({
  GET_ROLES_REQUEST: null,
  GET_ROLES_SUCCESS: null,
  GET_ROLES_FAILURE: null,
  GET_ROLES_UPDATE: null,

  SET_ROLES_REQUEST: null,
  SET_ROLES_SUCCESS: null,
  SET_ROLES_FAILURE: null,

  DELETE_ROLES_REQUEST: null,
  DELETE_ROLES_SUCCESS: null,
  DELETE_ROLES_FAILURE: null,
})

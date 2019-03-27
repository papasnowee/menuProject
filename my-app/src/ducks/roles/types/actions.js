import { createActions } from 'redux-actions'

export const {
  getTypesOfRolesRequest,
  getTypesOfRolesSuccess,
  getTypesOfRolesFailure,
  getTypesOfRolesUpdate,
} = createActions({
  GET_TYPES_OF_ROLES_REQUEST: null,
  GET_TYPES_OF_ROLES_SUCCESS: null,
  GET_TYPES_OF_ROLES_FAILURE: null,
  GET_TYPES_OF_ROLES_UPDATE: null,
})

import { createActions } from 'redux-actions'

export const {
  userPermissionRequest,
  userPermissionSuccess,
  userPermissionFailure,
} = createActions({
  USER_PERMISSION_REQUEST: null,
  USER_PERMISSION_SUCCESS: null,
  USER_PERMISSION_FAILURE: null,
})

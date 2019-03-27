import { createActions } from 'redux-actions'

export const {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  userLogout,
} = createActions({
  USER_LOGIN_REQUEST: null,
  USER_LOGIN_SUCCESS: null,
  USER_LOGIN_FAILURE: null,
  USER_LOGOUT: null,
})

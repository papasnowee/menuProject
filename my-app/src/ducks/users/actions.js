import { createActions } from "redux-actions"

export const { getUsersRequest, getUsersSuccess, getUsersFailure } = createActions({
  GET_USERS_REQUEST: null,
  GET_USERS_SUCCESS: null,
  GET_USERS_FAILURE: null,
})

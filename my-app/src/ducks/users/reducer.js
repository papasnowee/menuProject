import { handleActions } from "redux-actions"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "./actions"
import { fromJS } from "immutable"

const usersInitial = fromJS({
  users: {
    pages: {
      1: { userId: [] },
    },
    userList: {
      1: {},
    },
  },
})

const users = handleActions(
  {
    // action-creators
    [getUsersRequest]: (state, { payload: { param } }) =>
      state.set(`page${param}`, "isFetching", true),
    [getUsersSuccess]: (state, { payload: { data, param } }) =>
      state
        .set(`page${param}`, "isFetching", false)
        .set(`page${param}`, "isFetched", true)
        .set(`page${param}`, fromJS({ data: fromJS(data) })),

    [getUsersFailure]: (state, action) =>
      state
        .set(`page${param}`, "isFetching", false)
        .set(`page${param}`, "isFetched", true),
  },
  usersInitial
)

export default users

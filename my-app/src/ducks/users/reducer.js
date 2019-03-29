import { handleActions } from "redux-actions"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "./actions"
import { fromJS } from "immutable"

const usersInitial = fromJS({
  isFetching: false,
  isFetched: false,
  data: {},
  arr: [],
})

//reducer
const users = handleActions(
  {
    // action-creators
    [getUsersRequest]: (state, action) => state.set("isFetching", true),

    [getUsersSuccess]: (state, { payload: { data } }) =>
      state
        .set("isFetching", false)
        .set("isFetched", true)
        .set("data", fromJS(data)),

    [getUsersFailure]: (state, action) =>
      state.set("isFetching", false).set("isFetched", true),
  },
  usersInitial
)

export default users

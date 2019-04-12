import { handleActions } from "redux-actions"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "./actions"
import { fromJS } from "immutable"

const usersInitial = fromJS({
  page1: {
    isFetching: false,
    isFetched: false,
    data: {},
    arr: [],
  },
  page2: {
    isFetching: false,
    isFetched: false,
    data: {},
    arr: [],
  },
  page3: {
    isFetching: false,
    isFetched: false,
    data: {},
    arr: [],
  },
  page4: {
    isFetching: false,
    isFetched: false,
    data: {},
    arr: [],
  },
})
// setn для вложенности
//reducer
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

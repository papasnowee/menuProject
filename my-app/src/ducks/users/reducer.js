import { handleActions } from "redux-actions"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "./actions"
import { fromJS } from "immutable"

const usersInitial = fromJS({
    page1: {
        isFetching: false,
        isFetched: false,
        data: {},
    },
    page2: {
        isFetching: false,
        isFetched: false,
        data: {},
    },
    page3: {
        isFetching: false,
        isFetched: false,
        data: {},
    },
    page4: {
        isFetching: false,
        isFetched: false,
        data: {},
    },
    arr: [],
})

//reducer
const users = handleActions(
  {
    // action-creators
    [getUsersRequest]: (state, {payload: param}) => state.set(`page${param}`, {isFetching: true}),

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

import { handleActions } from "redux-actions"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "./actions"
import { fromJS } from "immutable"

const usersInitial = fromJS({
  pages: {
    1: { userId: [], isFetched: false, isFetching: false },
  },
  userList: {
    1: {},
  },
})

const users = handleActions(
  {
    // action-creators
    [getUsersRequest]: (state, { payload: { param } }) => {
      console.log("param =", param)
      return state.setIn(["pages", param, "isFetching"], true)
    },
    [getUsersSuccess]: (state, { payload: { data, param } }) => {
      state
        .setIn(["pages", param, "isFetching"], false)
        .setIn(["pages", param, "isFetched"], true)
      const userList = {}
      console.log("data", data.data)
      data.data.forEach(user => {
        console.log()
        // вместо [{id: 1, name: ...}, {id: 2, name:...}] ---> {1: {id: 1, name:...}, 2: {id: 2, name: ...}}
        userList[user.id] = user
      })
      console.log("userList", userList)
      // return state
      return state.mergeIn(["userList"], fromJS(userList))
    },
    [getUsersFailure]: (state, action) =>
      state
        .setIn(["pages", param, "isFetching"], true)
        .setIn(["pages", param, "isFetched"], false),
  },
  usersInitial
)

export default users

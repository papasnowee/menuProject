// import { handleActions } from "redux-actions"
// import { getUsersRequest, getUsersSuccess, getUsersFailure } from "./actions"
// import { fromJS } from "immutable"

// const usersInitial = fromJS({
//   pages: {
//     1: { userId: [], isFetched: false, isFetching: false },
//   },
//   userList: {
//     1: {},
//   },
// })

// const users = handleActions(
//   {
//     // action-creators
//     [getUsersRequest]: (state, { payload: { param } }) => {
//       console.log("param =", param)
//       return state.setIn(["pages", param, "isFetching"], true)
//     },
//     [getUsersSuccess]: (state, { payload: { data, param } }) => {
//       const userList = {}
//       data.data.forEach(user => {
//         // вместо [{id: 1, name: ...}, {id: 2, name:...}] ---> {1: {id: 1, name:...}, 2: {id: 2, name: ...}} что бы в дальнейшем быстро получать нужного пользователя по айди
//         userList[user.id] = user
//       })
//       return state
//         .setIn(["pages", param, "isFetching"], false)
//         .setIn(["pages", param, "isFetched"], true)
//         .mergeIn(["userList"], fromJS(userList))
//     },
//     [getUsersFailure]: (state, action) =>
//       state
//         .setIn(["pages", param, "isFetching"], true)
//         .setIn(["pages", param, "isFetched"], false),
//   },
//   usersInitial
// )

// export default users

import { handleActions } from "redux-actions"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "./actions"
import { fromJS } from "immutable"

const usersInitial = {
  pages: {
    1: 4444,
  },
}

const users = handleActions(
  {
    // action-creators
    [getUsersRequest]: (state, obj) => {
      // console.log("param =", param)
      console.log(state.pages === usersInitial.pages)
      return { pages: { 1: 33333 } }
    },
  },
  usersInitial
)

export default users

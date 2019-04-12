import createImmutableSelector from "create-immutable-selector"

export const getIsFetchingUsers = createImmutableSelector(
  state => state.getIn(["users", `page${state.param}`, "isFetching"]),
  substate => substate
)
//

export const getIsFetchedUsers = param => {
  return createImmutableSelector(
    state => state.getIn(["users", `page${param}`, "isFetched"]),
    substate => substate
  )
}

export const getPage = createImmutableSelector(
  state => state.getIn(["users", `page${state.param}`, "data"]),
  substate => substate.toJS()
)

// const stat = {
//   users: {
//     page1: 'data: "{ 1: 1, 2: 2 }",',
//   },
// }
// console.log(
//   "u4imsya selectoram",
//   createImmutableSelector(
//     // state => state.getIn(["users", "page1", "data"]),
//     state => state.getIn(["users", "page1"]),
//     substate => substate
//   )(stat)
// )

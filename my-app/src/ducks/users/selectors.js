import createImmutableSelector from "create-immutable-selector"

export const getIsFetchingUsers = createImmutableSelector(
  state => state.getIn(["usersId", `page${state.param}`, "isFetching"]),
  substate => substate
)
//

export const getIsFetchedUsers = param => {
  return createImmutableSelector(
    state => state.getIn(["users", "pages", param, "isFetched"]),
    substate => substate
  )
}

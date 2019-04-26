import createImmutableSelector from "create-immutable-selector"

export const getIsFetchingUsers = param => {
  return createImmutableSelector(
    state => state.getIn(["users", "pages", param, "isFetching"]),
    substate => substate
  )
}

export const getIsFetchedUsers = param => {
  return createImmutableSelector(
    state => state.getIn(["users", "pages", param, "isFetched"]),
    substate => substate
  )
}

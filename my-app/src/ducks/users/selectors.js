import createImmutableSelector from "create-immutable-selector"

export const getIsFetchingUsers = createImmutableSelector(
  state => state.getIn(["users", "isFetching"]),
  substate => substate
)

export const getIsFetchedUsers = createImmutableSelector(
  state => state.getIn(["users", "isFetched"]),
  substate => substate
)

export const getUsers = createImmutableSelector(
  state => state.getIn(["users", "data"]),
  substate => substate.toJS()
)

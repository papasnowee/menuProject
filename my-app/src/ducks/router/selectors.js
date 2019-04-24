import createImmutableSelector from "create-immutable-selector"

export const getRouteReducerSearch = createImmutableSelector(
  state => state.getIn(["routerReducer", "location", "search"]),
  substate => substate
)

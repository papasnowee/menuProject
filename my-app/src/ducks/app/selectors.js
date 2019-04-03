import createImmutableSelector from "create-immutable-selector"

export const getIsAuthApp = createImmutableSelector(
  state => state.getIn(["app", "isAuth"]),
  substate => substate
)

import createImmutableSelector from 'create-immutable-selector'

export const getIsFetchingUserLogin = createImmutableSelector(
  state => state.getIn(['user', 'login', 'isFetching']),
  substate => substate
)

export const getIsFetchedUserLogin = createImmutableSelector(
  state => state.getIn(['user', 'login', 'isFetched']),
  substate => substate
)

export const getIsAuth = createImmutableSelector(
  state => state.getIn(['user', 'login', 'isAuth']),
  substate => substate
)

export const getSessionId = createImmutableSelector(
  state => state.getIn(['user', 'login', 'data', 'sessionId']),
  substate => substate
)

export const getUserInfo = createImmutableSelector(
  state => state.getIn(['user', 'login', 'data', 'userInfo']),
  substate => substate.toJS()
)

export const getUserAbilities = createImmutableSelector(
  state =>
    state.getIn(['user', 'login', 'data', 'userInfo', 'role', 'abilityRecs']),
  substate =>
    substate
      .toJS()
      .filter(a => a.isAvail)
      .map(a => a.abilityId)
)

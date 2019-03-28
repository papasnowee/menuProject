import createImmutableSelector from 'create-immutable-selector'

export const getIsFetchingUserResources = createImmutableSelector(
  state => state.getIn(['user', 'resources', 'isFetching']),
  substate => substate
)

export const getIsFetchedUserResources = createImmutableSelector(
  state => state.getIn(['user', 'resources', 'isFetched']),
  substate => substate
)

export const getDataUserResourcesNormalized = createImmutableSelector(
  state => state.getIn(['user', 'resources', 'data']),
  substate => substate.toJS()
)

export const getDataUserResources = createImmutableSelector(
  state => state.getIn(['user', 'resources', 'data']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
)

export const getEnvOfUserResources = createImmutableSelector(
  state => getDataUserResources(state),
  substate => substate.filter(e => e.objectType === 'ENV')
)

export const getEnvGroupOfUserResources = createImmutableSelector(
  state => getDataUserResources(state),
  substate => substate.filter(e => e.objectType === 'ENV_GROUP')
)

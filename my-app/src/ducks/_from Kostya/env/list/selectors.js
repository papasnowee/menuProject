import createImmutableSelector from 'create-immutable-selector'

export const getIsEnvFetching = createImmutableSelector(
  state => state.getIn(['env', 'list', 'isFetching']),
  substate => substate
)

export const getIsEnvFetched = createImmutableSelector(
  state => state.getIn(['env', 'list', 'isFetched']),
  substate => substate
)

export const getEnvDataList = createImmutableSelector(
  state => state.getIn(['env', 'list', 'data']),
  substate => substate
)

export const getEnvData = createImmutableSelector(
  state => getEnvDataList(state),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
      .sort((a, b) => (new Date(a.crDate) > new Date(b.crDate) ? 1 : -1))
)

export const getEnvWithGroups = createImmutableSelector(
  state => getEnvDataList(state),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
      .filter(i => i.groupId !== null)
)

export const getEnvDataIds = createImmutableSelector(
  state => getEnvData(state),
  substate => substate.map(({ id }) => id)
)

export const getEnvNormalized = createImmutableSelector(
  state => getEnvDataList(state),
  substate => substate.toJS()
)

export const getEnvLabel = createImmutableSelector(
  state => state.getIn(['env', 'list', 'label']),
  substate => substate
)

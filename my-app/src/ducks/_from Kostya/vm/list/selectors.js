import createImmutableSelector from 'create-immutable-selector'

export const getIsVmFetching = createImmutableSelector(
  state => state.getIn(['vm', 'list', 'isFetching']),
  substate => substate
)

export const getIsVmFetched = createImmutableSelector(
  state => state.getIn(['vm', 'list', 'isFetched']),
  substate => substate
)

export const getVmData = createImmutableSelector(
  state => state.getIn(['vm', 'list', 'data']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
)

export const getVmDataIds = createImmutableSelector(
  state => getVmData(state),
  substate => substate.map(({ id }) => id)
)

export const getVmDataNormalized = createImmutableSelector(
  state => state.getIn(['vm', 'list', 'data']),
  substate => substate.toJS()
)

import createImmutableSelector from 'create-immutable-selector'

export const getIsVmTmpFetching = createImmutableSelector(
  state => state.getIn(['vm', 'templates', 'isFetching']),
  substate => substate
)

export const getIsVmTmpFetched = createImmutableSelector(
  state => state.getIn(['vm', 'templates', 'isFetched']),
  substate => substate
)

export const getVmTemplatesData = createImmutableSelector(
  state => state.getIn(['vm', 'templates', 'data']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
      .filter(vm => vm.envId === null)
      .sort((a, b) => a.crDate - b.crDate)
)

export const getVmTemplatesDataIds = createImmutableSelector(
  state => getVmTemplatesData(state),
  substate => substate.map(({ id }) => id)
)

export const getVmTemplatesDataNormalized = createImmutableSelector(
  state => state.getIn(['vm', 'templates', 'data']),
  substate => substate.toJS()
)

export const getVmTempaltesLabel = createImmutableSelector(
  state => state.getIn(['vm', 'templates', 'label']),
  substate => substate
)

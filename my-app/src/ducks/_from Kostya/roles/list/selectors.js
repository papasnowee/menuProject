import createImmutableSelector from 'create-immutable-selector'

export const getIsRolesListFetching = createImmutableSelector(
  state => state.getIn(['roles', 'list', 'isFetching']),
  substate => substate
)

export const getIsRolesListFetched = createImmutableSelector(
  state => state.getIn(['roles', 'list', 'isFetched']),
  substate => substate
)

export const getRolesList = createImmutableSelector(
  state => state.getIn(['roles', 'list', 'data']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
      .sort((a, b) => a.crDate - b.crDate)
)

export const getRolesListNormalized = createImmutableSelector(
  state => state.getIn(['roles', 'list', 'data']),
  substate => substate.toJS()
)

export const getRolesLabel = createImmutableSelector(
  state => state.getIn(['roles', 'list', 'label']),
  substate => substate
)

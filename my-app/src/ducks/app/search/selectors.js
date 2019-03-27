import createImmutableSelector from 'create-immutable-selector'

export const getIsSearchFetching = createImmutableSelector(
  state => state.getIn(['app', 'search', 'isFetching']),
  substate => substate
)

export const getIsSearchFetched = createImmutableSelector(
  state => state.getIn(['app', 'search', 'isFetched']),
  substate => substate
)

export const getSearchValue = createImmutableSelector(
  state => state.getIn(['app', 'search', 'value']),
  substate => substate
)

export const getSearchResult = createImmutableSelector(
  state => state.getIn(['app', 'search', 'result']),
  substate => (substate !== null ? substate.toJS() : null)
)

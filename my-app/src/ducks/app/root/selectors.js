import createImmutableSelector from 'create-immutable-selector'

export const getIsDataFetching = createImmutableSelector(
  state => state.getIn(['app', 'root', 'isInitialDataFetching']),
  substate => substate
)

export const getIsDataFetched = createImmutableSelector(
  state => state.getIn(['app', 'root', 'isInitialDataFetched']),
  substate => substate
)

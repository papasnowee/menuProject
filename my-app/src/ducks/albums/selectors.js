import createImmutableSelector from 'create-immutable-selector'

export const getIsFetchingAlbums = createImmutableSelector(
  state => state.getIn(['albums', 'isFetching']),
  substate => substate
)

export const getIsFetchedAlbums = createImmutableSelector(
  state => state.getIn(['albums', 'isFetched']),
  substate => substate
)

export const getAlbums = createImmutableSelector(
  state => state.getIn(['albums', 'data']),
  substate => substate.toJS()
)

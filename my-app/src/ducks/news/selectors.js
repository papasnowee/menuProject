import createImmutableSelector from 'create-immutable-selector'

export const getIsFetchingNews = createImmutableSelector(
  state => state.getIn(['news', 'isFetching']),
  substate => substate
)

export const getIsFetchedNews = createImmutableSelector(
  state => state.getIn(['news', 'isFetched']),
  substate => substate
)

export const getNews = createImmutableSelector(
  state => state.getIn(['news', 'data']),
  substate => substate.toJS()
)

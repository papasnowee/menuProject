import createImmutableSelector from 'create-immutable-selector'

export const getIsDataFetching = createImmutableSelector(
  state => state.getIn(['app', 'root', 'isInitialDataFetching']),
  substate => substate
)

export const getIsDataFetched = createImmutableSelector(
  state => state.getIn(['app', 'root', 'isInitialDataFetched']),
  substate => substate
)

export const getNotificatiosVisible = createImmutableSelector(
  state => state.getIn(['app', 'notifications', 'visible']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
)

export const getNotificationNoReaded = createImmutableSelector(
  state => state.getIn(['app', 'notifications', 'history', 'noReaded']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
)

export const getNotificationReaded = createImmutableSelector(
  state => state.getIn(['app', 'notifications', 'history', 'readed']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
)

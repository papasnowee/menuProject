import createImmutableSelector from 'create-immutable-selector'

export const getIsLogsFetching = logsType =>
  createImmutableSelector(
    state => state.getIn(['app', 'logs', logsType, 'isFetching']),
    substate => substate
  )

export const getIsLogsFetched = logsType =>
  createImmutableSelector(
    state => state.getIn(['app', 'logs', logsType, 'isFetched']),
    substate => substate
  )

export const getLogsList = logsType =>
  createImmutableSelector(
    state => state.getIn(['app', 'logs', logsType, 'data']),
    substate =>
      substate
        .entrySeq()
        .toJS()
        .map(([key, value]) => value)
        .sort((a, b) => (new Date(a.time) > new Date(b.time) ? 1 : -1))
  )

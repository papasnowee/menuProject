import createImmutableSelector from 'create-immutable-selector'

export const getIsEnvTmpFetching = createImmutableSelector(
  state => state.getIn(['env', 'templates', 'isFetching']),
  substate => substate
)

export const getIsEnvTmpFetched = createImmutableSelector(
  state => state.getIn(['env', 'templates', 'isFetched']),
  substate => substate
)

export const getEnvsTemplates = createImmutableSelector(
  state => state.getIn(['env', 'templates', 'data']),
  substate => substate
)

export const getEnvTemplatesData = createImmutableSelector(
  state => getEnvsTemplates(state),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
      .sort((a, b) => a.crDate - b.crDate)
)

export const getEnvTemplatesDataIds = createImmutableSelector(
  state => getEnvTemplatesData(state),
  substate => substate.map(({ id }) => id)
)

export const getEnvTemplatesNormalized = createImmutableSelector(
  state => getEnvsTemplates(state),
  substate => substate.toJS()
)

export const getEnvTemplatesLabel = createImmutableSelector(
  state => state.getIn(['env', 'templates', 'label']),
  substate => substate
)

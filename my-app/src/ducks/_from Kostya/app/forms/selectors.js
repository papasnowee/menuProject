import createImmutableSelector from 'create-immutable-selector'

export const getForms = createImmutableSelector(
  state => state.getIn(['app', 'forms']),
  substate => substate.toJS()
)

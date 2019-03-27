import createImmutableSelector from 'create-immutable-selector'

export const getSettings = createImmutableSelector(
  state => state.getIn(['app', 'settings']),
  substate => substate
)

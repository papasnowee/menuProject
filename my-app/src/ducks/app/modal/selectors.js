import createImmutableSelector from 'create-immutable-selector'

export const getIsShowModal = createImmutableSelector(
  state => state.getIn(['app', 'modal', 'isShow']),
  substate => substate
)

export const getModals = createImmutableSelector(
  state => state.getIn(['app', 'modal', 'list']),
  substate => substate.toJS()
)

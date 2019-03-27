import createImmutableSelector from 'create-immutable-selector'

export const getIsVmImagesFetched = createImmutableSelector(
  state => state.getIn(['vm', 'images', 'isFetched']),
  substate => substate
)

export const getVmImages = createImmutableSelector(
  state => state.getIn(['vm', 'images', 'data']),
  substate =>
    substate
      .entrySeq()
      .toJS()
      .map(([key, value]) => value)
)

export const getVmImagesNormalized = createImmutableSelector(
  state => state.getIn(['vm', 'images', 'data']),
  substate => substate.toJS()
)

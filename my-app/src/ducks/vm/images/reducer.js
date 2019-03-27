import { handleActions, combineActions } from 'redux-actions'
import { vmImagesRequest, vmImagesSuccess, vmImagesFailure } from './actions'
import { fromJS } from 'immutable'
import { flatNormalizer } from '../../utils'

const vmImagesInitial = fromJS({
  isFetching: false,
  isFetched: false,
  data: {},
})

const images = handleActions(
  {
    [vmImagesRequest]: (state, _action) => state.setIn(['isFetching'], true),

    [vmImagesSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(flatNormalizer({ data }) || {})),

    [vmImagesFailure]: (state, _action) =>
      state.setIn(['isFetched'], true).setIn(['isFetching'], false),
  },
  vmImagesInitial
)

export default images

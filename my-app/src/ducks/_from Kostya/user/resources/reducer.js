import { handleActions, combineActions } from 'redux-actions'
import {
  userPermissionRequest,
  userPermissionSuccess,
  userPermissionFailure,
} from './actions'
import { fromJS } from 'immutable'
import { flatNormalizer } from '../../utils'

const resourcesInitial = fromJS({
  isFetching: false,
  isFetched: false,
  data: {},
})

const resources = handleActions(
  {
    [userPermissionRequest]: (state, _action) =>
      state.setIn(['isFetching'], true),

    [userPermissionSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(flatNormalizer({ data }, 'objectId'))),

    [userPermissionFailure]: (state, _action) =>
      state.setIn(['isFetching'], false).setIn(['isFetched'], true),
  },
  resourcesInitial
)

export default resources

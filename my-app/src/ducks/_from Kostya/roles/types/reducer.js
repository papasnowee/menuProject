import { handleActions, combineActions } from 'redux-actions'
import {
  getTypesOfRolesRequest,
  getTypesOfRolesSuccess,
  getTypesOfRolesFailure,
} from './actions'
import { flatNormalizer } from '../../utils'
import { fromJS } from 'immutable'

const typesOfRolesInitial = fromJS({
  isFetching: false,
  isFetched: false,
  data: {},
})

const typesOfRoles = handleActions(
  {
    [getTypesOfRolesRequest]: (state, _action) =>
      state.setIn(['isFetching'], true),

    [getTypesOfRolesSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(flatNormalizer({ data }) || {})),

    [getTypesOfRolesFailure]: (_state, _action) => typesOfRolesInitial,
  },
  typesOfRolesInitial
)

export default typesOfRoles

import { handleActions, combineActions } from 'redux-actions'
import {
  getRolesRequest,
  getRolesSuccess,
  getRolesFailure,
  setRolesRequest,
  setRolesSuccess,
  setRolesFailure,
  deleteRolesRequest,
  deleteRolesSuccess,
  deleteRolesFailure,
} from './actions'
import { flatNormalizer } from '../../utils'
import { fromJS } from 'immutable'

const rolesInitial = fromJS({
  isFetching: false,
  isFetched: false,
  itemCallApi: {
    isSetFetching: false,
    isDeleteFetching: false,
  },
  label: 'Роли',
  data: {},
})

const roles = handleActions(
  {
    /**
     * get roles
     */
    [getRolesRequest]: (state, _action) => state.setIn(['isFetching'], true),

    [getRolesSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(flatNormalizer({ data }) || {})),

    [getRolesFailure]: (_state, _action) => rolesInitial,

    /**
     * set roles
     */
    [setRolesRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], true),

    [setRolesSuccess]: (state, { payload: { data } }) =>
      state
        .mergeIn(['data'], fromJS(flatNormalizer({ data }) || {}))
        .setIn(['itemCallApi', 'isSetFetching'], false),

    [setRolesFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], false),

    /**
     * delete roles
     */
    [deleteRolesRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], true),

    [deleteRolesSuccess]: (state, { payload: { ids } }) =>
      state
        .setIn(['data'], state.get('data').deleteAll(ids))
        .setIn(['itemCallApi', 'isDeleteFetching'], false),

    [deleteRolesFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], false),
  },
  rolesInitial
)

export default roles

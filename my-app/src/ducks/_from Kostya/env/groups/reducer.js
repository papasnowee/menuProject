import { handleActions, combineActions } from 'redux-actions'
import {
  getEnvGroupRequest,
  getEnvGroupSuccess,
  getEnvGroupFailure,
  setEnvGroupRequest,
  setEnvGroupSuccess,
  setEnvGroupFailure,
  deleteEnvGroupRequest,
  deleteEnvGroupSuccess,
  deleteEnvGroupFailure,
} from './actions'
import { fromJS } from 'immutable'
import { flatNormalizer } from '../../utils'

const envGroupsInitial = fromJS({
  isFetching: false,
  isFetched: false,
  itemCallApi: {
    isSetFetching: false,
    isDeleteFetching: false,
    obg: {
      obj: {
        sss: true,
      },
    },
  },
  data: {},
})

const envGroups = handleActions(
  {
    /**
     * get env groups
     */
    [getEnvGroupRequest]: (state, _action) => state.setIn(['isFetching'], true),

    [getEnvGroupSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(flatNormalizer({ data }) || {})),

    [getEnvGroupFailure]: (state, _action) =>
      state.setIn(['isFetching'], false).setIn(['isFetched'], true),

    /**
     * set env group item
     */
    [setEnvGroupRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], true),

    [setEnvGroupSuccess]: (state, { payload: { data } }) =>
      state
        .mergeIn(['data'], fromJS(flatNormalizer({ data }) || {}))
        .setIn(['itemCallApi', 'isSetFetching'], false),

    [setEnvGroupFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], false),

    /**
     * delete env group item
     */
    [deleteEnvGroupRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], true),

    [deleteEnvGroupSuccess]: (state, { payload: { ids } }) =>
      state
        .setIn(['data'], state.get('data').deleteAll(ids))
        .setIn(['itemCallApi', 'isDeleteFetching'], false),

    [deleteEnvGroupFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], false),
  },
  envGroupsInitial
)

export default envGroups

import { handleActions, combineActions } from 'redux-actions'
import {
  getEnvListRequest,
  getEnvListSuccess,
  getEnvListFailure,
  setEnvListRequest,
  setEnvListSuccess,
  setEnvListFailure,
  deleteEnvListRequest,
  deleteEnvListSuccess,
  deleteEnvListFailure,
} from './actions'
import { fromJS } from 'immutable'
import { flatNormalizer } from '../../utils'

const envListInitial = fromJS({
  isFetching: false,
  isFetched: false,
  itemCallApi: {
    isSetFetching: false,
    isDeleteFetching: false,
  },
  label: 'Тестовые среды',
  data: {},
})

const envList = handleActions(
  {
    /**
     * get env list
     */
    [getEnvListRequest]: (state, _action) => state.setIn(['isFetching'], true),

    [getEnvListSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(flatNormalizer({ data }) || {})),

    [getEnvListFailure]: (state, _action) =>
      state.setIn(['isFetching'], false).setIn(['isFetched'], true),

    /**
     * set env item
     */
    [setEnvListRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], true),

    [setEnvListSuccess]: (state, { payload: { data } }) =>
      state
        .mergeIn(['data'], fromJS(flatNormalizer({ data }) || {}))
        .setIn(['itemCallApi', 'isSetFetching'], false),

    [setEnvListFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], false),

    /**
     * delete env item
     */
    [deleteEnvListRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], true),

    [deleteEnvListSuccess]: (state, { payload: { ids } }) =>
      state
        .setIn(['data'], state.get('data').deleteAll(ids))
        .setIn(['itemCallApi', 'isDeleteFetching'], false),

    [deleteEnvListFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], false),
  },
  envListInitial
)

export default envList

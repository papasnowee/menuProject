import { handleActions, combineActions } from 'redux-actions'
import {
  getEnvTemplatesRequest,
  getEnvTemplatesSuccess,
  getEnvTemplatesFailure,
  setEnvTemplateRequest,
  setEnvTemplateSuccess,
  setEnvTemplateFailure,
  deleteEnvTemplateRequest,
  deleteEnvTemplateSuccess,
  deleteEnvTemplateFailure,
} from './actions'
import { fromJS } from 'immutable'
import { flatNormalizer } from '../../utils'

const envTemplatesInitial = fromJS({
  isFetching: false,
  isFetched: false,
  itemCallApi: {
    isSetFetching: false,
    isDeleteFetching: false,
  },
  label: 'Шаблоны тестовых сред',
  data: {},
})

const templates = handleActions(
  {
    /**
     * get env tmp list
     */
    [getEnvTemplatesRequest]: (state, _action) =>
      state.setIn(['isFetching'], true),

    [getEnvTemplatesSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(flatNormalizer({ data }) || {})),

    [getEnvTemplatesFailure]: (state, _action) =>
      state.setIn(['isFetching'], false).setIn(['isFetched'], true),

    /**
     * set env tmp item
     */
    [setEnvTemplateRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], true),

    [setEnvTemplateSuccess]: (state, { payload: { data } }) =>
      state
        .mergeIn(['data'], fromJS(flatNormalizer({ data }) || {}))
        .setIn(['itemCallApi', 'isSetFetching'], false),

    [setEnvTemplateFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], false),

    /**
     * delete env tmp
     */
    [deleteEnvTemplateRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], true),

    [deleteEnvTemplateSuccess]: (state, { payload: { ids } }) =>
      state
        .setIn(['data'], state.get('data').deleteAll(ids))
        .setIn(['itemCallApi', 'isDeleteFetching'], false),

    [deleteEnvTemplateFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], false),
  },
  envTemplatesInitial
)

export default templates

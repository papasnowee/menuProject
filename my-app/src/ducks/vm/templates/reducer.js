import { handleActions, combineActions } from 'redux-actions'
import {
  getVmTemplatesRequest,
  getVmTemplatesSuccess,
  getVmTemplatesFailure,
  setVmTemplateRequest,
  setVmTemplateSuccess,
  setVmTemplateFailure,
  deleteVmTemplateRequest,
  deleteVmTemplateSuccess,
  deleteVmTemplateFailure,
} from './actions'
import { fromJS } from 'immutable'
import { flatNormalizer } from '../../utils'

const vmTemplatesInitial = fromJS({
  isFetching: false,
  isFetched: false,
  itemCallApi: {
    isSetFetching: false,
    isDeleteFetching: false,
  },
  label: 'Шаблоны виртуальных машин',
  data: {},
})

const templates = handleActions(
  {
    /**
     * get vm tmp list
     */
    [getVmTemplatesRequest]: (state, _action) =>
      state.setIn(['isFetching'], true),

    [getVmTemplatesSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(flatNormalizer({ data }) || {})),

    [getVmTemplatesFailure]: (state, _action) =>
      state.setIn(['isFetched'], true).setIn(['isFetching'], false),

    /**
     * set vm tmp item
     */
    [setVmTemplateRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], true),

    [setVmTemplateSuccess]: (state, { payload: { data } }) =>
      state
        .mergeIn(['data'], fromJS(flatNormalizer({ data }) || {}))
        .setIn(['itemCallApi', 'isSetFetching'], false),

    [setVmTemplateFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isSetFetching'], false),

    /**
     * delete vm tmp
     */
    [deleteVmTemplateRequest]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], true),

    [deleteVmTemplateSuccess]: (state, { payload: { ids } }) =>
      state
        .setIn(['data'], state.get('data').deleteAll(ids))
        .setIn(['itemCallApi', 'isDeleteFetching'], false),

    [deleteVmTemplateFailure]: (state, _action) =>
      state.setIn(['itemCallApi', 'isDeleteFetching'], false),
  },
  vmTemplatesInitial
)

export default templates

import { handleActions, combineActions } from 'redux-actions'
import {
  getEnvListRequest,
  getEnvListSuccess,
  getEnvListFailure,
} from '../../env'
import { fromJS } from 'immutable'
import normalizer from './normalizer'

const vmListInitial = fromJS({
  isFetching: false,
  isFetched: false,
  data: {},
})

const vmList = handleActions(
  {
    [getEnvListRequest]: (state, _action) => state.setIn(['isFetching'], true),

    [getEnvListSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(normalizer({ data }) || {})),

    [getEnvListFailure]: (state, _action) =>
      state.setIn(['isFetched'], true).setIn(['isFetching'], false),
  },
  vmListInitial
)

export default vmList

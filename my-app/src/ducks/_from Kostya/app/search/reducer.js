import { handleActions } from 'redux-actions'
import {
  getSearchRequest,
  getSearchSuccess,
  getSearchFailure,
  getSearchReset,
} from './actions'
import { fromJS } from 'immutable'

const rootInit = fromJS({
  isFetching: false,
  isFetched: false,
  value: '',
  result: null,
})

const root = handleActions(
  {
    [getSearchRequest]: (state, { payload: { value } }) =>
      state.setIn(['isFetching'], true).setIn(['value'], value),

    [getSearchSuccess]: (state, { payload: { result } }) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['result'], fromJS(result)),

    [getSearchFailure]: (state, _action) =>
      state
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['result'], null),

    [getSearchReset]: (_state, _action) => rootInit,
  },
  rootInit
)

export default root

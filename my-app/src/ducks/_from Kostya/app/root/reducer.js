import { handleActions } from 'redux-actions'
import {
  appInitialDataRequest,
  appInitialDataSuccess,
  appInitialDataFailure,
} from './actions'
import { fromJS } from 'immutable'

const rootInit = fromJS({
  isInitialDataFetching: false,
  isInitialDataFetched: false,
})

const root = handleActions(
  {
    [appInitialDataRequest]: (state, _action) =>
      state.setIn(['isInitialDataFetching'], true),

    [appInitialDataSuccess]: (state, _action) =>
      state
        .setIn(['isInitialDataFetching'], false)
        .setIn(['isInitialDataFetched'], true),

    [appInitialDataFailure]: (_state, _action) => rootInit,
  },
  rootInit
)

export default root

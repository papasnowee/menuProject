import { handleActions } from 'redux-actions'
import {
  getLogsRequest,
  getLogsSuccess,
  getLogsFailure,
  getLogsReset,
} from './actions'
import { fromJS } from 'immutable'
import { flatNormalizer } from '../../utils'

const logsInitial = fromJS({
  technical: {
    isFetching: false,
    isFetched: false,
    data: {},
  },
  business: {
    isFetching: false,
    isFetched: false,
    data: {},
  },
})

const logs = handleActions(
  {
    [getLogsRequest]: (state, { payload: { logsType } }) =>
      state.setIn([logsType, 'isFetching'], true),

    [getLogsSuccess]: (state, { payload: { logsType, data } }) =>
      state
        .setIn([logsType, 'isFetching'], false)
        .setIn([logsType, 'isFetched'], true)
        .setIn([logsType, 'data'], fromJS(flatNormalizer({ data }) || {})),

    [getLogsFailure]: (state, { payload: { logsType } }) =>
      state
        .setIn([logsType, 'isFetching'], false)
        .setIn([logsType, 'isFetched'], true),

    [getLogsReset]: (state, { payload: { logsType } }) =>
      state
        .setIn([logsType, 'isFetching'], false)
        .setIn([logsType, 'isFetched'], false)
        .setIn([logsType, 'data'], fromJS({})),
  },
  logsInitial
)

export default logs

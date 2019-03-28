import { createActions } from 'redux-actions'

export const {
  appInitialDataRequest,
  appInitialDataSuccess,
  appInitialDataFailure,
} = createActions({
  APP_INITIAL_DATA_REQUEST: null,
  APP_INITIAL_DATA_SUCCESS: null,
  APP_INITIAL_DATA_FAILURE: null,
})

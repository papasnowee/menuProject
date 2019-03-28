import { createActions } from 'redux-actions'

export const {
  getSearchRequest,
  getSearchSuccess,
  getSearchFailure,
  getSearchReset,
} = createActions({
  GET_SEARCH_REQUEST: null,
  GET_SEARCH_SUCCESS: null,
  GET_SEARCH_FAILURE: null,
  GET_SEARCH_RESET: null,
})

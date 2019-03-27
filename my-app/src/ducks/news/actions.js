import { createActions } from 'redux-actions'

export const { getNewsRequest, getNewsSuccess, getNewsFailure } = createActions(
  {
    GET_NEWS_REQUEST: null,
    GET_NEWS_SUCCESS: null,
    GET_NEWS_FAILURE: null,
  }
)

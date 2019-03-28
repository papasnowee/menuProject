import { createActions } from 'redux-actions'

export const { getAlbumsRequest, getAlbumsSuccess, getAlbumsFailure } = createActions({
  GET_ALBUMS_REQUEST: null,
  GET_ALBUMS_SUCCESS: null,
  GET_ALBUMS_FAILURE: null,
})

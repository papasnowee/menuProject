import { handleActions } from 'redux-actions'
import { getAlbumsRequest, getAlbumsSuccess, getAlbumsFailure } from './actions'
import { fromJS } from 'immutable'

const albumsInitial = fromJS({
  isFetching: false,
  isFetched: false,
  data: {},
  arr: [],
})

//reducer
const albums = handleActions(
  {
    // action-creators
    [getAlbumsRequest]: (state, action) => state.set('isFetching', true),

    [getAlbumsSuccess]: (state, { payload: { data } }) =>
      state
        .set('isFetching', false)
        .set('isFetched', true)
        .set('data', fromJS(data)),

    [getAlbumsFailure]: (state, action) =>
      state.set('isFetching', false).set('isFetched', true),
  },
  albumsInitial
)

export default albums

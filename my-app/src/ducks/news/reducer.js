import { handleActions } from 'redux-actions'
import { getNewsRequest, getNewsSuccess, getNewsFailure } from './actions'
import { fromJS } from 'immutable'

const newsInitial = fromJS({
  isFetching: false,
  isFetched: false,
  data: {},
  arr: [],
})

const news = handleActions(
  {
    [getNewsRequest]: (state, action) => state.set('isFetching', true),

    [getNewsSuccess]: (state, { payload: { data } }) =>
      state
        .set('isFetching', false)
        .set('isFetched'.true)
        .set('data', fromJS(data)),

    [getNewsFailure]: (state, action) =>
      state.set('isFetching', false).set('isFetched', true),
  },
  newsInitial
)

export default news

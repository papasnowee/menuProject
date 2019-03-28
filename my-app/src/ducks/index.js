import { combineReducers } from 'redux-immutable'

import news from './news'
import albums from './albums'

export default combineReducers({
  news,
  albums,
})

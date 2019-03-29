import { combineReducers } from "redux-immutable"

import news from "./news"
import albums from "./albums"
import users from "./users"

export default combineReducers({
  news,
  albums,
  users,
})

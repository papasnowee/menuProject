import { combineReducers } from "redux-immutable"
import { routerReducer } from "react-router-redux"

import news from "./news"
import albums from "./albums"
import users from "./users"
import app from "./app"
import router from "./router"

export default combineReducers({
  app,
  news,
  albums,
  users,
  router,
  routerReducer,
})

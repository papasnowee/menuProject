import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { Provider } from "react-redux"
import store from "./store"
import { history } from "./router"
import { ConnectedRouter } from "react-router-redux"
/**
 * TODO: 1)
 * сделать ducks(selectors, actions, reducer),
 * вызов апи  users и albums через redux-saga,
 * верстку под компоненты
 *
 * https://jsonplaceholder.typicode.com/albums
 * https://jsonplaceholder.typicode.com/users
 */

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

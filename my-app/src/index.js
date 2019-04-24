import React from "react"
import ReactDOM from "react-dom"

import App from "./ui/App"
import { Provider } from "react-redux"
import store from "./store"
import { history } from "./router"
import { ConnectedRouter } from "react-router-redux"

// import { Map, List } from "immutable"

// const a = { a: "aa", b: "bb", c: "cc" }
// const b = ["a", "b", "c"]
// const bb = List(b)
// const aa = Map(a)
// console.log("b List entrySeq =", bb.entrySeq().toJS())
// console.log("a Map entrySeq =", aa.entrySeq().toJS())
// console.log("skip 2", bb.take(1))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
)

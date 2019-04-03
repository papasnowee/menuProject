import React from "react"
import HomePage from "../pages/HomePage"
import tabsWithOnLogin from "../pages/Tabs"
import { Route, Switch, Redirect } from "react-router-dom"
import { routesNormalized } from "../../router"

console.log(routesNormalized)
class App extends React.Component {
  render() {
    const { isAuth, onLogin } = this.props

    return isAuth ? (
      <HomePage />
    ) : (
      <Switch>
        <Route path="/" component={tabsWithOnLogin(onLogin)} exact />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default App

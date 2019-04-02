import React from "react"
import HomePage from "../pages/HomePage"
import tabsWithOnLogin from "../pages/Tabs"
import { Route, Switch, Redirect } from "react-router-dom"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuth: false,
    }

    this.onLogin = this.onLogin.bind(this)
  }

  onLogin() {
    this.setState({ isAuth: true })
  }

  render() {
    const { isAuth } = this.state

    return isAuth ? (
      <HomePage />
    ) : (
      <Switch>
        <Route path="/" component={tabsWithOnLogin(this.onLogin)} exact />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default App

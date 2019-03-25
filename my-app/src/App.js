import React from 'react'
import HomePage from './pages/HomePage'
import Login from './components/forms/Login'
import Tabs from './pages/Tabs'
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuth: false,
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin() {
    this.setState({ isAuth: true })
  }

  render() {
    const { isAuth } = this.state

    return isAuth ? <HomePage /> : <Tabs />
  }
}

export default App

// return isAuth ? <HomePage /> : <Login onLogin={this.handleLogin} />

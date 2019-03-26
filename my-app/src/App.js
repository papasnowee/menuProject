import React from 'react'
import HomePage from './pages/HomePage'
import Tabs from './pages/Tabs'
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

    return isAuth ? <HomePage /> : <Tabs onLogin={this.onLogin} />
  }
}

export default App

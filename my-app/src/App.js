import React from 'react'
import HomePage from './pages/HomePage'
import Tabs from './pages/Tabs'
import { testExport1, testExport2 } from './testExport'
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
    console.log(testExport1())
    console.log(testExport2())
    const { isAuth } = this.state

    return isAuth ? <HomePage /> : <Tabs onLogin={this.onLogin} />
  }
}

export default App

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paper, TextField, Button } from '@material-ui/core'

/**
 * TODO: 1) перенести стили из JSX в файл стилей
 * TODO: 2) добивить табы: первый таб форма логина, второй регистрация
 */

export default class Login extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  static propTypes = {
    onLogin: PropTypes.func,
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    const { login, password } = this.state
    const { onLogin } = this.props

    e.preventDefault()

    const getIsNotEmpty = v => v !== ''

    if (getIsNotEmpty(login) && getIsNotEmpty(password)) {
      onLogin({ login, password })
    }
  }

  render() {
    const { password, login } = this.state

    const textFieldProps = {
      onChange: this.handleChange,
      fullWidth: true,
      margin: 'normal',
      required: true,
    }

    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          style={{
            width: 300,
            height: 220,
            padding: 30,
            margin: 'auto',
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <TextField
              type="text"
              name="login"
              label="login"
              value={login}
              {...textFieldProps}
            />
            <TextField
              type="password"
              name="password"
              label="password"
              value={password}
              {...textFieldProps}
            />
            <div
              style={{
                marginTop: 25,
                textAlign: 'right',
              }}
            >
              <Button type="submit" color="primary" variant="contained">
                Sing in
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    )
  }
}

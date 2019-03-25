import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paper, TextField, Button } from '@material-ui/core'
import './Registration.css'
import Checkbox from '@material-ui/core/Checkbox'

/**
 * TODO: 1) перенести стили из JSX в файл стилей
 * TODO: 2) добивить табы: первый таб форма логина, второй регистрация
 */

export default class Registration extends PureComponent {
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
    const { password, login, passwordAgain, email } = this.state

    const textFieldProps = {
      onChange: this.handleChange,
      fullWidth: true,
      margin: 'normal',
      required: true,
    }

    return (
      <div className="auth-form">
        <Paper className="auth-form__paper">
          <form onSubmit={this.handleSubmit}>
            <TextField
              type="text"
              name="login"
              label="Логин"
              value={login}
              {...textFieldProps}
            />
            <TextField
              type="password"
              name="password"
              label="Пароль"
              value={password}
              {...textFieldProps}
            />
            <TextField
              type="password"
              name="password-again"
              label="Повторите пароль"
              value={passwordAgain}
              {...textFieldProps}
            />
            <TextField
              type="email"
              name="email"
              label="E-mail"
              value={email}
              {...textFieldProps}
            />
            <div className="auth-form__button">
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

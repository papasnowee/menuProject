import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Paper, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio'
import CountrySelect from './CountrySelect'
import BirthdayDate from '../../DatePicker'

import './Registration.css'

export default class Registration extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: '',
      passwordAgain: '',
      gender: '',
      email: '',
      select: { countrys: [], birthday: '' },
      datePicker: new Date(),
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeGender = this.handleChangeGender.bind(this)
  }

  static propTypes = {
    onLogin: PropTypes.func,
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    const { login, password, passwordAgain } = this.state
    const { onLogin } = this.props

    e.preventDefault()

    const getIsNotEmpty = v => v !== ''

    if (
      getIsNotEmpty(login) &&
      getIsNotEmpty(password) &&
      password === passwordAgain
    ) {
      onLogin({ login, password })
    }
  }

  handleChangeGender({ target: { value } }) {
    this.setState({ gender: value })
  }

  render() {
    const {
      password,
      login,
      passwordAgain,
      email,
      gender,
      select,
      datePicker,
    } = this.state

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
              name="passwordAgain"
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
            <div>
              Пол
              <div className="registration__row">
                <Radio
                  checked={gender === 'male'}
                  onChange={this.handleChangeGender}
                  value="male"
                  name="gender"
                  id="male"
                />
                <label htmlFor="male">Мужской</label>
              </div>
              <div className="registration__row">
                <Radio
                  checked={gender === 'female'}
                  onChange={this.handleChangeGender}
                  value="female"
                  name="gender"
                  id="female"
                />
                <label htmlFor="female">Женский</label>
              </div>
            </div>
            <div className="auth-form__button">
              <CountrySelect
                onChange={this.handleChange}
                value={null}
                select={select}
              />
              <BirthdayDate
                onChange={this.handleChange}
                name="datePicker"
                value={datePicker}
                label="Дата рождения"
                selectedDate={datePicker}
              />
              <div className="auth-form__Button">
                <Button type="submit" color="primary" variant="contained">
                  Зарегистрироваться
                </Button>
              </div>
            </div>
          </form>
        </Paper>
      </div>
    )
  }
}

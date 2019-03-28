import { handleActions, combineActions } from 'redux-actions'
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFailure,
  userLogout,
} from './actions'
import { fromJS } from 'immutable'

const loginInitial = fromJS({
  isAuth: false,
  isFetching: false,
  isFetched: false,
  data: {
    userInfo: {
      name: '',
      surname: '',
    },
  },
})

const login = handleActions(
  {
    [userLoginRequest]: (state, _action) => state.setIn(['isFetching'], true),

    [userLoginSuccess]: (state, { payload: { data } }) =>
      state
        .setIn(['isAuth'], true)
        .setIn(['isFetching'], false)
        .setIn(['isFetched'], true)
        .setIn(['data'], fromJS(data)),

    [combineActions(userLoginFailure, userLogout)]: (_state, _action) =>
      loginInitial,
  },
  loginInitial
)

export default login

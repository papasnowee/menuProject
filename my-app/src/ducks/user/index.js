import { combineReducers } from 'redux-immutable'
import login from './login'
import resources from './resources'

const user = combineReducers({
  login,
  resources,
})

export default user
export * from './login'
export * from './resources'

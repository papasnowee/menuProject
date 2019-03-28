import { combineReducers } from 'redux-immutable'
import list from './list'
import types from './types'

const roles = combineReducers({
  list,
  types,
})

export default roles
export * from './list'
export * from './types'

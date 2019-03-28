import { combineReducers } from 'redux-immutable'
import list from './list'
import templates from './templates'
import groups from './groups'

const env = combineReducers({
  groups,
  list,
  templates,
})

export default env
export * from './groups'
export * from './list'
export * from './templates'

import { combineReducers } from 'redux-immutable'
import list from './list'
import templates from './templates'
import images from './images'

const vm = combineReducers({
  list,
  templates,
  images,
})

export default vm
export * from './list'
export * from './templates'
export * from './images'

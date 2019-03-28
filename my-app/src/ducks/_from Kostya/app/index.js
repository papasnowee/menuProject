import { combineReducers } from 'redux-immutable'
import root from './root'
import notifications from './notifications'
import settings from './settings'
import forms from './forms'
import search from './search'
import logs from './logs'
import modal from './modal'

const app = combineReducers({
  root,
  notifications,
  settings,
  forms,
  search,
  logs,
  modal,
})

export default app
export * from './root'
export * from './notifications'
export * from './settings'
export * from './search'
export * from './logs'
export * from './modal'

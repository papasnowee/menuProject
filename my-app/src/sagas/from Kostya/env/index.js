import { fork, all } from 'redux-saga/effects'
import { envListUpdateWatcher } from './listLoad'
import { envTemplatesUpdateWatcher } from './templatesLoad'
import { envGroupsUpdateWatcher } from './groupsLoad'
import setEnvWatcher from './setEnv'
import setEnvTemplateWatcher from './setTemplate'
import setGroupWatcher from './setGroup'
import deleteEnvTempalteWatcher from './deleteTemplate'
import deleteEnvItemWatcher from './deleteEnv'
import deleteGroupWatcher from './deleteGroup'

function* envRootSaga() {
  yield all([
    fork(envListUpdateWatcher),
    fork(envTemplatesUpdateWatcher),
    fork(envGroupsUpdateWatcher),

    fork(setEnvWatcher),
    fork(setEnvTemplateWatcher),
    fork(setGroupWatcher),

    fork(deleteEnvTempalteWatcher),
    fork(deleteEnvItemWatcher),
    fork(deleteGroupWatcher),
  ])
}

export default envRootSaga
export * from './templatesLoad'
export * from './listLoad'
export * from './groupsLoad'
export {
  setEnvWatcher,
  setEnvTemplateWatcher,
  setGroupWatcher,
  deleteEnvTempalteWatcher,
  deleteEnvItemWatcher,
  deleteGroupWatcher,
}

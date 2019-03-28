import { fork, all } from 'redux-saga/effects'
import { vmTemplatesUpdateWatcher } from './templatesLoad'
import { vmImagesUpdateWatcher } from './imagesLoad'
import setVmTemplateWatcher from './setTemplate'
import deleteVmTemplateWatcher from './deleteTemplate'

function* vmRootSaga() {
  yield all([
    fork(vmTemplatesUpdateWatcher),
    fork(vmImagesUpdateWatcher),
    fork(setVmTemplateWatcher),
    fork(deleteVmTemplateWatcher),
  ])
}

export default vmRootSaga
export * from './templatesLoad'
export * from './imagesLoad'
export { setVmTemplateWatcher, deleteVmTemplateWatcher }

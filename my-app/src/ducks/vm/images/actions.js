import { createActions } from 'redux-actions'

export const {
  vmImagesRequest,
  vmImagesSuccess,
  vmImagesFailure,
  vmImagesUpdate,
} = createActions({
  VM_IMAGES_REQUEST: null,
  VM_IMAGES_SUCCESS: null,
  VM_IMAGES_FAILURE: null,
  VM_IMAGES_UPDATE: null,
})

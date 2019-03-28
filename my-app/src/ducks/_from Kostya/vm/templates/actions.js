import { createActions } from 'redux-actions'

export const {
  getVmTemplatesRequest,
  getVmTemplatesSuccess,
  getVmTemplatesFailure,
  getVmTemplatesUpdate,

  setVmTemplateRequest,
  setVmTemplateSuccess,
  setVmTemplateFailure,

  deleteVmTemplateRequest,
  deleteVmTemplateSuccess,
  deleteVmTemplateFailure,
} = createActions({
  GET_VM_TEMPLATES_REQUEST: null,
  GET_VM_TEMPLATES_SUCCESS: null,
  GET_VM_TEMPLATES_FAILURE: null,
  GET_VM_TEMPLATES_UPDATE: null,

  SET_VM_TEMPLATE_REQUEST: null,
  SET_VM_TEMPLATE_SUCCESS: null,
  SET_VM_TEMPLATE_FAILURE: null,

  DELETE_VM_TEMPLATE_REQUEST: null,
  DELETE_VM_TEMPLATE_SUCCESS: null,
  DELETE_VM_TEMPLATE_FAILURE: null,
})

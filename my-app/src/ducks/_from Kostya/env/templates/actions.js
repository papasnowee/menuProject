import { createActions } from 'redux-actions'

export const {
  getEnvTemplatesRequest,
  getEnvTemplatesSuccess,
  getEnvTemplatesFailure,
  getEnvTemplatesUpdate,

  setEnvTemplateRequest,
  setEnvTemplateSuccess,
  setEnvTemplateFailure,

  deleteEnvTemplateRequest,
  deleteEnvTemplateSuccess,
  deleteEnvTemplateFailure,
} = createActions({
  GET_ENV_TEMPLATES_REQUEST: null,
  GET_ENV_TEMPLATES_SUCCESS: null,
  GET_ENV_TEMPLATES_FAILURE: null,
  GET_ENV_TEMPLATES_UPDATE: null,

  SET_ENV_TEMPLATE_REQUEST: null,
  SET_ENV_TEMPLATE_SUCCESS: null,
  SET_ENV_TEMPLATE_FAILURE: null,

  DELETE_ENV_TEMPLATE_REQUEST: null,
  DELETE_ENV_TEMPLATE_SUCCESS: null,
  DELETE_ENV_TEMPLATE_FAILURE: null,
})

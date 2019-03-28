import { createActions } from 'redux-actions'

export const {
  getFormRequest,
  getFormSuccess,
  getFormFailure,
  getFormReset,
} = createActions({
  GET_FORM_REQUEST: null,
  GET_FORM_SUCCESS: null,
  GET_FORM_FAILURE: null,
  GET_FORM_RESET: null,
})

import { handleActions, combineActions } from 'redux-actions'
import {
  getFormRequest,
  getFormSuccess,
  getFormFailure,
  getFormReset,
} from './actions'
import { fromJS } from 'immutable'

const formsInitial = fromJS({})

const forms = handleActions(
  {
    [getFormRequest]: (state, { payload: { id, data = null } }) =>
      state.setIn([id], {
        state: 'pending',
        data,
      }),

    [getFormSuccess]: (state, { payload: { id } }) =>
      state.setIn([id], { state: 'success', data: null }),

    [getFormFailure]: (state, { payload: { id } }) =>
      state.setIn([id, 'state'], 'failure'),

    [getFormReset]: (state, { payload: { id } }) => state.deleteIn([id]),
  },
  formsInitial
)

export default forms

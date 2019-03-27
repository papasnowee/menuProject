import { handleActions } from 'redux-actions'
import { showModal, closeModal } from './actions'
import { fromJS } from 'immutable'

const modalInitial = fromJS({
  isShow: false,
  list: fromJS({}),
})

const modal = handleActions(
  {
    [showModal]: (state, { payload: { id } }) =>
      state.set('isShow', true).setIn(['list', id], fromJS({ isShow: true })),

    [closeModal]: (state, { payload: { id } }) =>
      state.set('isShow', false).deleteIn(['list', id]),
  },
  modalInitial
)

export default modal

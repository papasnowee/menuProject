import { handleActions } from 'redux-actions'
import { settingsChange } from './actions'
import { fromJS } from 'immutable'

const settingsInit = fromJS({
  isShowNotifications: {
    value: true,
    type: 'checkbox',
    label: 'Показывать оповещения',
  },
})

const settings = handleActions(
  {
    [settingsChange]: (state, { payload: { data } }) => state.merge(data),
  },
  settingsInit
)

export default settings

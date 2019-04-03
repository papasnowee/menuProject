import { handleActions } from "redux-actions"
import { onLogin } from "./actions"
import { fromJS } from "immutable"

const appInitial = fromJS({
  isAuth: false,
})

//reducer
const login = handleActions(
  {
    // action-creators
    [onLogin]: (state, action) => state.set("isAuth", true),
  },
  appInitial
)

export default login

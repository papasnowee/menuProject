import { handleActions } from "redux-actions"
import { onLogin } from "./actions"
import { fromJS } from "immutable"

const loginInitial = fromJS({
  isAuth: true,
})

//reducer
const login = handleActions(
  {
    // action-creators
    [onLogin]: (state, action) => state.set("isAuth", true),
  },
  loginInitial
)

export default login

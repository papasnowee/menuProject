import { handleActions } from "redux-actions"
import { routeRendered } from "./actions"
import { fromJS } from "immutable"

const initialRouter = fromJS({
  currentRoute: "",
})

const router = handleActions(
  {
    [routeRendered]: (state, { payload: { id, params } }) => {
      state.set("currentRoute", id).set("params", params)
      console.log("params = ", params)
    },
  },
  initialRouter
)

export default router

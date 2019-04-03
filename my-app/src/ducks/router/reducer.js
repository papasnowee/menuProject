import { handleActions } from "redux-actions"
import { routeRendered } from "./actions"
import { fromJS } from "immutable"

const initialRouter = fromJS({
  currentRoute: "",
})

const router = handleActions(
  {
    [routeRendered]: (state, { payload: { id } }) => state.set("currentRoute", id),
  },
  initialRouter
)

export default router

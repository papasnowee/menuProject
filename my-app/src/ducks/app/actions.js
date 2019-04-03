import { createActions } from "redux-actions"

export const { onLogin } = createActions({
  ON_LOGIN: null,
})

console.log("onLogin из createActions", { [onLogin]: "sdfsdfsdfdsf" })

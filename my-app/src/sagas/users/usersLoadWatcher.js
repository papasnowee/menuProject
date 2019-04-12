import { put, call, take } from "redux-saga/effects"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "../../ducks/users"
import { usersApi } from "../../api"
import axios from "axios"
import { get } from "../../api/base"

export function* usersLoadWatcher() {
  while (true) {
    const {
      payload: { param },
    } = yield take(getUsersRequest.toString())
    console.log("param", param)
    try {
      const responce = axios
        .get("https://reqres.in/api/users?page=1")
        .then(responce => responce)
      console.log("responce", responce)
      // const { data } = yield call(usersApi(param))

      console.log(data)
      yield put(getUsersSuccess({ data, param }))
    } catch (error) {
      console.log(error)
      yield put(getUsersFailure())
    }
  }
}

import { put, call, take } from "redux-saga/effects"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "../../ducks/users"
import { usersApi } from "../../api"
import { normalize, schema } from "normalizr"

export function* usersLoadWatcher() {
  while (true) {
    // const {
    //   payload: { param },
    // } = yield take(getUsersRequest.toString())
    console.log("param", param)
    try {
      const { data } = yield call(usersApi(param))

      const user = new schema.Entity("users")
      const mySchema = new schema.Array(user)
      const normalizedData = normalize(data.data, mySchema)
      console.log("normaliz", normalizedData)

      yield put(getUsersSuccess({ data, param }))
    } catch (error) {
      console.log(error)
      yield put(getUsersFailure())
    }
  }
}

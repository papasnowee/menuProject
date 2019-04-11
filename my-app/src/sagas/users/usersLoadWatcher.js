import { put, call, take } from "redux-saga/effects"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "../../ducks/users"
import { usersApi } from "../../api"
export function* usersLoadWatcher() {
  while (true) {
    const {
      payload: { params },
    } = yield take(getUsersRequest.toString())

    try {
      const { data } = yield call(usersApi(params), { params })
      console.log(data)
      yield put(getUsersSuccess({ data, params }))
    } catch (error) {
      console.log(error)
      yield put(getUsersFailure())
    }
  }
}

import { put, call, take } from "redux-saga/effects"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "../../ducks/users"
import { UsersApi } from "../../api"

export function* usersLoadWatcher() {
  while (true) {
    yield take(getUsersRequest.toString())

    try {
      const { data } = yield call(UsersApi.getUsers)
      yield put(getUsersSuccess({ data }))
    } catch (error) {
      console.log(error)
      yield put(getUsersFailure())
    }
  }
}

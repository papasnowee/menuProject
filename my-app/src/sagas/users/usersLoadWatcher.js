import { put, call, take } from "redux-saga/effects"
import { getUsersRequest, getUsersSuccess, getUsersFailure } from "../../ducks/users"
import { usersApi } from "../../api"
export function* usersLoadWatcher() {
  while (true) {
    const {
      payload: { param },
    } = yield take(getUsersRequest.toString())
    console.log("usersrLoadWatcher param = ", param)
    try {
      // const { data } = yield call(usersApi(numberUsersPage)[getUsers])
      const { data } = yield call(usersApi())
      console.log(data)
      yield put(getUsersSuccess({ data }))
    } catch (error) {
      console.log(error)
      yield put(getUsersFailure())
    }
  }
}

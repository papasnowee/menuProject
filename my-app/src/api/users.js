import { get } from "./base"
function usersApi(url) {
  class UsersApi {
    static getUsers() {
      return get(url, "https://reqres.in/api")
    }
  }
}
export default usersApi

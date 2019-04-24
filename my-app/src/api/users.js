import { get } from "./base"
function usersApi(param) {
  return function() {
    return get("https://reqres.in/api/users?page=", param)
  }
}

export { usersApi }

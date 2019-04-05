import { get } from "./base"
// function usersApi(numberUsersPage) {
//   return class UsersApi {
//     static getUsers() {
//       return get(2, "https://reqres.in/api/users?page=")
//     }
//   }
// }
// export default usersApi

function usersApi() {
  return function() {
    return get(2, "https://reqres.in/api/users?page=")
  }
}

export { usersApi }

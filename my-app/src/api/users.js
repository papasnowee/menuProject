import { get } from "./base"

export class UsersApi {
  static getUsers() {
    return get("users")
  }
}

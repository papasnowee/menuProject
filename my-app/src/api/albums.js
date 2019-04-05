import { get } from "./base"

export class AlbumsApi {
  // зачем классом , а не функцией?
  static getAlbums() {
    return get("albums", "https://jsonplaceholder.typicode.com/")
  }
}

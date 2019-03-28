import { get } from './base'

export class AlbumsApi {
  static getAlbums() {
    return get('users')
  }
}

import { get } from './base'

export class PostsApi {
  static getPosts() {
    return get('posts')
  }
}

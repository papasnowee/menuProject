import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/'

const put = (url, data = {}) =>
  axios({
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    url: API + url,
    data,
  })

const get = url =>
  axios({
    method: 'GET',
    url: API + url,
  })

export { put, get }

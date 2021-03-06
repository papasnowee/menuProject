import axios from "axios"

const put = (url, data = {}) =>
  axios({
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    url: API + url,
    data,
  })

const get = (url, param) =>
  axios({
    method: "GET",
    url: url + param,
  })

export { put, get }

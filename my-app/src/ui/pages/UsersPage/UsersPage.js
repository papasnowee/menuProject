import React from "react"
import { Link } from "react-router-dom"

const UsersPage = function({ data, urlParse }) {
  console.log("data v UsersPage", data)
  return (
    <>
      <Link to="/users/page1">1</Link>
      <Link to="/users/page2">2</Link>
      <Link to="/users/page3">3</Link>
      <Link to="/users/page4">4</Link>
      <div>data.data[0]):{JSON.stringify(data.data[0])}</div>
      <div>data.data[1]):{JSON.stringify(data.data[1])}</div>
      <div>data.data[2]):{JSON.stringify(data.data[2])}</div>
    </>
  )
}

export default UsersPage

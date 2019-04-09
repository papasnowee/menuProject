import React from "react"
import { Link } from "react-router-dom"
import { withUrlParser } from "../../../router/withUrlParser"

const UsersPage = function({ data, urlParse }) {
  console.log("data v UsersPage", data)
  const pageNumb = urlParse("pageNumb")
  return (
    <>
      <User />
      <Previous />
      <Link to="/users/page${pageNumb}">1</Link>
      <Link to="/users/page2">2</Link>
      <Link to="/users/page3">3</Link>
      <Link to="/users/page4">4</Link>
      <Next />
      <h1>{`данные страницы №${pageNumb}:`}</h1>
      <div>{JSON.stringify(data.data[pageNumb])}</div>
    </>
  )
}

export default withUrlParser(UsersPage)

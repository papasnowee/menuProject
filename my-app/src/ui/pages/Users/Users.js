import React from "react"
import { Link } from "react-router-dom"
import { withUrlParser } from "../../../router/withUrlParser"

const Users = function({ data, urlParse, paginationButtonsNumb, location }) {
  // paginationButtonsNumb - количество кнопок пагинации, 4 в нашем случае
  console.log("data v UsersPage", data)
  const pageNumb = urlParse("pageNumb", location)
  const linkFirstNumber =
    Math.floor(pageNumb / paginationButtonsNumb) * paginationButtonsNumb -
    (pageNumb % paginationButtonsNumb === 0 ? paginationButtonsNumb - 1 : -1) // вычисляем цифру первого линка
  Math.floor(pageNumb / paginationButtonsNumb) * paginationButtonsNumb
  return (
    <>
      <UsersList />
      {/* <Previous /> */}
      <Link
        onClick={() => {
          console.log("liiiink")
        }}
        to={`/users/page${linkFirstNumber}`}
      >
        {linkFirstNumber}
      </Link>
      <Link to={`/users/page${linkFirstNumber + 1}`}>{linkFirstNumber + 1}</Link>
      <Link to={`/users/page${linkFirstNumber + 2}`}>{linkFirstNumber + 2}</Link>
      <Link to={`/users/page${linkFirstNumber + 3}`}>{linkFirstNumber + 3}</Link>
      {/* <Next /> */}
      <h1>{`данные страницы №${pageNumb}:`}</h1>
      <div>{JSON.stringify(data.data[pageNumb])}</div>
    </>
  )
}

export default withUrlParser(Users)

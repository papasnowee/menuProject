import React from "react"
const UsersPage = function({ data }) {
  console.log("data v UsersPage", data)
  return (
    <>
      <div>{JSON.stringify(data.data[0])}</div>
      <div>{JSON.stringify(data.data[1])}</div>
      <div>{JSON.stringify(data.data[2])}</div>
    </>
  )
}

export default UsersPage

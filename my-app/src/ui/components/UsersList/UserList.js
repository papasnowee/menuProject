import React from "react"
import UserListChild from "./UserListChild"

class UserList extends React.Component {
  state = {
    value: 0,
  }

  render() {
    console.log("render UserList")
    return (
      <>
        <UserListChild />
      </>
    )
  }
}

export default UserList

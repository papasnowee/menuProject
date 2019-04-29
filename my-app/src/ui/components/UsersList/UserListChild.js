import React from "react"

class UserListChild extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }

  render() {
    console.log("render UserList Child")
    return <div>Child</div>
  }
}

export default UserListChild

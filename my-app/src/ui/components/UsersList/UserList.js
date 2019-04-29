import React from "react"
import UserListChild from "./UserListChild"
// export default data => {
//   console.log("data", data)
//   return <div>{JSON.stringify(data)}</div>
// }

class UserList extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  state = {
    value: 0,
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }

  render() {
    const { value } = this.props
    console.log("render UserList")
    return (
      <>
        {/* <button
          onClick={() => {
            console.log(this.state.value)
            this.setState({ value: this.state.value + 1 })
          }}
        /> */}
        <div>{"userList: " + value.value} </div>
        <UserListChild />
      </>
    )
  }
}

export default UserList

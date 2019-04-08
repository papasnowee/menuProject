import React, { Component } from "react"
import { Link } from "react-router-dom"

class Users extends Component {
  render() {
    // const { data, match, isFetching, isFetched } = this.props

    // if (isFetching) return <Preloader />
    // console.log("data v Users = ", data)
    return (
      <>
        {/* {isFetched && (
          <>
            <h1>пользователи</h1>
          <div>
              <h2>
                  Полученные данные(стр. 1):
              </h2>
              <div>
                  {JSON.stringify(data.data)}
              </div> */}

        <Link to="/users/page1">
          перейти к пагинации сраниц пользователей(компонент UsersPage)
        </Link>
        {/* </div> */}
        {/* </>
        )} */}
      </>
    )
  }
}

export default Users

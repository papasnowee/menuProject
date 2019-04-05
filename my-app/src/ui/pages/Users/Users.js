import React, { Component } from "react"
import Preloader from "../../components/Preloader"
import { Link, Route } from "react-router-dom"
import UsersPage from "../../components/UsersPage"

export default class Users extends Component {
  render() {
    const { data, match, isFetching, isFetched } = this.props

    if (isFetching) return <Preloader />
    console.log("data v Users = ", data)
    return (
      <>
        {isFetched && (
          <>
            <div>пользователи</div>
            <div>Пагинация</div>
            <Link to="/users/page1">1 страница</Link>
            <Link to="/users/page2">2 страница</Link>
            <Link to="/users/page3">3 страница</Link>
            <Link to="/users/page4">4 страница</Link>
            {/* <Route
              path={"/users/page:numberUsersPage"}
              render={props => {
                console.log(
                  "numberUsersPage при рендере UsersPage",
                  props.match.params.numberUsersPage
                )
                routeRendered({
                  id: "2",
                  numberUsersPage: props.match.params.numberUsersPage,
                }) // функция от объекта {id: значение айди}
                return <UsersPage data={data} {...props} />
              }}
            /> */}
            {/* <Route
              path={"/users/page:numberUsersPage"}
              render={props => {
                return <div>rabotaet Route v Users</div>
              }}
            /> */}
          </>
        )}
      </>
    )
  }
}

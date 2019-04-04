import React, { Component } from "react"
import Preloader from "../../components/Preloader"

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
          </>
        )}
      </>
    )
  }
}

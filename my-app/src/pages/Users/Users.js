import React, { Component } from "react"

export default class Users extends Component {
  render() {
    const { getUsersRequest } = this.props
    return (
      <>
        <button type="button" onClick={getUsersRequest}>
          получить список пользователей
        </button>
        <div>пользователи</div>
      </>
    )
  }
}

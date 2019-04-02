import React, { Component } from 'react'

export default class About extends Component {
  render() {
    const { getNewsRequest } = this.props
    return (
      <>
        <button type="button" onClick={getNewsRequest}>
          получить список постов
        </button>
        <div>о нас</div>
      </>
    )
  }
}

import React, { Component } from 'react'

export default class Albums extends Component {
  render() {
    const { getAlbumsRequest } = this.props
    return (
      <>
        <button type="button" onClick={getAlbumsRequest}>
          получить список альбомов
        </button>
        <div>альбомы</div>
      </>
    )
  }
}

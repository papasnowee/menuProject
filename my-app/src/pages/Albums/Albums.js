import React, { Component } from "react"
import Table from "../../components/Table"

export default class Albums extends Component {
  render() {
    const { getAlbumsRequest, data, isFetched } = this.props

    return (
      <>
        <button type="button" onClick={getAlbumsRequest}>
          получить список альбомов
        </button>
        <div>альбомы</div>
        {isFetched ? <Table data={data} /> : null}
      </>
    )
  }
}

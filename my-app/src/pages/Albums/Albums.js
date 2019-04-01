import React, { Component } from "react"
import Table from "../../components/Table"
import albumRows from "../../components/Table/rows"

export default class Albums extends Component {
  render() {
    const { getAlbumsRequest, data, isFetched, match } = this.props

    return (
      <>
        <button type="button" onClick={getAlbumsRequest}>
          получить список альбомов
        </button>
        <div>альбомы</div>
        {isFetched ? (
          <Table
            data={data}
            rows={albumRows}
            link={{
              pathname: `${match.url}/album`,
              param: "albumId",
            }}
          />
        ) : null}
      </>
    )
  }
}

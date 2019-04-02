import React, { Component } from "react"
import Table from "../../components/Table"
import albumRows from "../../components/Table/rows"
import Preloader from "../../components/Preloader"

export default class Albums extends Component {
  render() {
    const { getAlbumsRequest, data, isFetched, isFetching, match } = this.props

    if (!isFetched) {
      getAlbumsRequest()
      return (
        <div>
          Загрузка...
          <Preloader />
        </div>
      )
    } else {
      return (
        <>
          {/* <button type="button" onClick={getAlbumsRequest}>
            получить список альбомов
          </button> */}
          <div>альбомы</div>
          <Table
            data={data}
            rows={albumRows}
            link={{
              pathname: `${match.url}/album`,
              param: "albumId",
            }}
          />
        </>
      )
    }
  }
}

// задача:

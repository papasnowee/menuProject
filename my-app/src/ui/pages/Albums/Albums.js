import React, { Component } from "react"
import Table from "../../components/Table"
import albumRows from "../../components/Table/rows"
import Preloader from "../../components/Preloader"

export default class Albums extends Component {
  // componentDidMount() {
  //   const { isFetched, getAlbumsRequest } = this.props
  //   if (!isFetched) getAlbumsRequest()
  // }

  render() {
    const { data, match, isFetching, isFetched } = this.props

    if (isFetching) return <Preloader />

    return (
      <>
        {isFetched && (
          <>
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
        )}
      </>
    )
  }
}

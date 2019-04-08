import React, { Component } from "react"
import Preloader from "../../components/Preloader"
import { compose } from "recompose"
import { withUrlParser } from "../../../router/withUrlParser"

class Album extends Component {
  get album() {
    const { albumsNormalized, urlParse } = this.props
    const albumId = urlParse("albumId")
    return albumsNormalized[albumId]
  }

  render() {
    const { title, id, userId, isFetching, isFetched } = this.album

    if (isFetching) return <Preloader />

    return (
      <>{isFetched && <div>{`id: ${id},  userId: ${userId}, title: ${title}`}</div>}</>
    )
  }
}

export default withUrlParser(Album)

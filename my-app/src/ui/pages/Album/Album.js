import React, { Component } from "react"
import Preloader from "../../components/Preloader"

export default class Album extends Component {
  // componentDidMount() {
  //   const { isFetched, getAlbumsRequest } = this.props
  //   if (!isFetched) getAlbumsRequest()
  // }

  get album() {
    const {
      location: { search },
      albumsNormalized,
    } = this.props

    const params = new URLSearchParams(search)
    const albumId = params.get("albumId")

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

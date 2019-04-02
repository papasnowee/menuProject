import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Album extends Component {
  static propTypes = {
    prop: PropTypes,
  }

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
    const { title, id, userId } = this.album

    if (!isFetched) return <Preloader />

    return <div>{`id: ${id},  userId: ${userId}, title: ${title}`}</div>
  }
}

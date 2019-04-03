import { connect } from "react-redux"
import Album from "./Album"
import {
  getAlbums,
  getAlbumsNormalized,
  getIsFetchingAlbums,
  getIsFetchedAlbums,
  getAlbumsRequest,
} from "../../../ducks/albums"

import { bindActionCreators } from "redux"

const mapStateToProps = state => ({
  isFetching: getIsFetchingAlbums(state),
  isFetched: getIsFetchedAlbums(state),
  albumsNormalized: getAlbumsNormalized(state),
  albums: getAlbums(state),
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getAlbumsRequest, // action creator
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Album)

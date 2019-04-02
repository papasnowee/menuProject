import { connect } from "react-redux"
import Album from "./Album"
import { getAlbums, getAlbumsNormalized } from "../../ducks/albums"

const mapStateToProps = state => ({
  albumsNormalized: getAlbumsNormalized(state),
  albums: getAlbums(state),
})

export default connect(
  mapStateToProps,
  null
)(Album)

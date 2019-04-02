import Albums from "./Albums"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  getIsFetchingAlbums,
  getIsFetchedAlbums,
  getAlbums,
  getAlbumsRequest,
} from "../../../ducks/albums"

const mapStateToProps = state => ({
  isFetching: getIsFetchingAlbums(state),
  isFetched: getIsFetchedAlbums(state),
  data: getAlbums(state),
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getAlbumsRequest,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums)

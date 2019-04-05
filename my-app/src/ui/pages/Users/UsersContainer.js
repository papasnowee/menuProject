import Users from "./Users"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  getIsFetchingUsers,
  getIsFetchedUsers,
  getUsers,
  getUsersRequest,
} from "../../../ducks/users"

const mapStateToProps = state => ({
  isFetching: getIsFetchingUsers(state),
  isFetched: getIsFetchedUsers(state),
  data: getUsers(state),
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      getUsersRequest,
    },
    dispatch
  ),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)

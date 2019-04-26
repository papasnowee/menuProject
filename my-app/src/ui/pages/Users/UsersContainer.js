import Users from "./Users"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  getIsFetchingUsers,
  getIsFetchedUsers,
  getUsers,
  // getUsersRequest,
} from "../../../ducks/users"
import { getRouteReducerSearch } from "../../../ducks/router"

const urlParse = (params, search) => {
  console.log("search", search)
  const paramsFromUrl = new URLSearchParams(search)

  const map = {}
  const mapper = p => (map[p] = paramsFromUrl.get(p))
  console.log("param", paramsFromUrl.get("pageNumber"))
  return Array.isArray(params) ? params.forEach(mapper) : paramsFromUrl.get(params)
}

const mapStateToProps = state => ({
  isFetching: getIsFetchingUsers(urlParse(params, getRouteReducerSearch(state))),
  isFetched: getIsFetchedUsers(urlParse(params, getRouteReducerSearch(state))),
  // data: getUsers(state),
})
// const mapDispatchToProps = dispatch => ({
//     ...bindActionCreators(
//         {
//             getUsersRequest,
//         },
//         dispatch
//     ),
// })

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Users)

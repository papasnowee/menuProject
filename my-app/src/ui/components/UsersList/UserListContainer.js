import UserList from "./UserList"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
  getIsFetchingUsers,
  getIsFetchedUsers,
  // getUsers,
  // getUsersRequest,
} from "../../../ducks/users"
import { getRouteReducerSearch } from "../../../ducks/router"

const urlParse = (paramsName, search) => {
  console.log("search", search)
  const paramsFromUrl = new URLSearchParams(search)

  const map = {}
  const mapper = p => (map[p] = paramsFromUrl.get(p))
  console.log("param", paramsFromUrl.get("pageNumber"))
  return Array.isArray(paramsName)
    ? paramsName.forEach(mapper)
    : paramsFromUrl.get(paramsName)
}

const mapStateToProps = state => ({
  isFetching: getIsFetchingUsers(urlParse("pageNumber", getRouteReducerSearch(state)))(
    state
  ),
  isFetched: getIsFetchedUsers(urlParse("pageNumber", getRouteReducerSearch(state)))(
    state
  ),
  current: urlParse("pageNumber", getRouteReducerSearch(state)),
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
)(UserList)

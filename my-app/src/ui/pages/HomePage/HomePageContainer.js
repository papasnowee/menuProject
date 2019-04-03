import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import HomePage from "./HomePage"
import { routeRendered } from "../../../ducks/router"

const mapStateToProps = null

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      routeRendered,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)

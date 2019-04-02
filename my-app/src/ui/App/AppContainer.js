import App from "./App"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"

const mapStateToProps = state => ({})

const mapDispathToProps = dispatch => ({})

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispathToProps
  )
)(App)

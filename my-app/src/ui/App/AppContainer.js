import App from "./App"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"
import { onLogin, getIsAuthApp } from "../../ducks/app/login"

import { bindActionCreators } from "redux"

const mapStateToProps = state => ({
  isAuth: getIsAuthApp(state),
})

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(
    {
      onLogin,
    },
    dispatch
  ),
})

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispathToProps
  )
)(App)

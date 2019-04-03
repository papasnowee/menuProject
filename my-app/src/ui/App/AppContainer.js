import App from "./App"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"
import { getLogin, getIsAuthApp } from "../../ducks/app"
console.log("onLogin при импорте из дакс = ", getLogin)

import { bindActionCreators } from "redux"

const mapStateToProps = state => ({
  isAuth: getIsAuthApp(state),
})

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(
    {
      getLogin,
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

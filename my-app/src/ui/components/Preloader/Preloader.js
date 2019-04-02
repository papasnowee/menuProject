import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"
import "./Preloader.css"

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
})

function CircularIndeterminate(props) {
  const { classes } = props
  const classNames = {}
  classNames[classes.progress] = true
  classNames["preloader-container__circul"] = true
  return (
    <div className="preloader-container">
      <CircularProgress className={classNames} />
    </div>
  )
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CircularIndeterminate)

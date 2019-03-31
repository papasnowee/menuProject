import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import Paper from "@material-ui/core/Paper"
import TableBody from "../TableBody"
import TableHead from '../TableHead'
import columnNames from './columnNames'

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
})

function SimpleTable({classes, data}) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead columnNames={columnNames}/>
        <TableBody data={data} />
      </Table>
    </Paper>
  )
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleTable)

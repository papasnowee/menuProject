import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import Paper from "@material-ui/core/Paper"

class TableBody1 extends React.Component {
  render() {
    const { data } = this.props
    const tableBody = data.map(row => (
      <TableRow key={row.id}>
        {Object.keys(row).map(cell => (
          <TableCell key={cell}>{row[cell]}</TableCell>
        ))}
      </TableRow>
    ))
    return <TableBody>{tableBody}</TableBody>
  }
}

export default TableBody1

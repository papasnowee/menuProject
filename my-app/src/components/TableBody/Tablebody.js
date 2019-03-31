import React from "react"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"

class ReusableTableBody extends React.Component {
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

export default ReusableTableBody

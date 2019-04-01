import React from "react"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

const ReusableTableHead = ({ rows }) => (
  <TableHead>
    <TableRow>
      {rows.map(item => Object.keys(item).map(key => <TableCell>{item[key]}</TableCell>))}
    </TableRow>
  </TableHead>
)

export default ReusableTableHead

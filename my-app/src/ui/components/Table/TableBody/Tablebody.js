import React from "react"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableRow from "@material-ui/core/TableRow"

const ReusableTableBody = ({ data, onClickRow }) => (
  <TableBody>
    {data.map(row => (
      <TableRow key={row.id} onClick={onClickRow(row.id)}>
        {Object.keys(row).map(cell => (
          <TableCell key={cell}>{row[cell]}</TableCell>
        ))}
      </TableRow>
    ))}
  </TableBody>
)

export default ReusableTableBody

import React from "react"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import TableCell from '@material-ui/core/TableCell'

function ReusableTableHead( {columnNames }) {
    const columnNamesRaw = columnNames.map((item) => {
        for (let key in item) {
            return (
                <TableCell>{item[key]}</TableCell>
            )
        }
    })
    return (
            <TableHead>
                <TableRow>{columnNamesRaw}</TableRow>
            </TableHead>
        )
}

export default ReusableTableHead

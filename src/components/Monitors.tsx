import { Theme } from "@material-ui/core"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import { makeStyles } from "@material-ui/styles"
import React from "react"
import Title from "./Title"

const createData = (
  id: number,
  date: string,
  name: string,
  shipTo: string
) => ({ id, date, name, shipTo })

const rows = [
  createData(0, "Just Now", "Production", "Passed"),
  createData(1, "5 minutes ago", "Production", "Passed"),
  createData(2, "7 minutes ago", "Sandbox", "Passed"),
  createData(3, "10 minutes ago", "Production", "Failed"),
  createData(4, "12 minutes ago", "Sandbox", "Passed")
]

const useStyles = makeStyles(({ spacing }: Theme) => ({
  seeMore: {
    marginTop: spacing(3)
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Monitors</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Monitor</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="javascript:;">
          See more
        </Link>
      </div> */}
    </React.Fragment>
  )
}

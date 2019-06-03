import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { IRootRes } from "@watchtower-dev/sdk-js"
import React from "react"
import Title from "./Title"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  textField: {
    marginLeft: spacing(1),
    marginRight: spacing(1),
    width: "97.5%"
  }
}))

export default ({
  root
}: {
  root: IRootRes & { id?: string; secret?: string }
  path: string
}) => {
  const classes = useStyles()

  return (
    <>
      <Title>API Keys</Title>
      <TextField
        id="id"
        label="ID"
        value={root.id}
        className={classes.textField}
        margin="normal"
        InputProps={{ readOnly: true }}
      />
      <TextField
        id="secret"
        label="Secret"
        value={root.secret}
        className={classes.textField}
        margin="normal"
        InputProps={{ readOnly: true }}
      />
    </>
  )
}

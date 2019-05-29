import { Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import React from "react"
import Title from "./Title"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  textField: {
    marginLeft: spacing(1),
    marginRight: spacing(1),
    width: "97.5%"
  }
}))

export default ({ id, secret }: { id: string; secret: string }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Title>API Keys</Title>
      <TextField
        id="id"
        label="ID"
        value={id}
        className={classes.textField}
        margin="normal"
        InputProps={{ readOnly: true }}
      />
      <TextField
        id="secret"
        label="Secret"
        value={secret}
        className={classes.textField}
        margin="normal"
        InputProps={{ readOnly: true }}
      />
    </React.Fragment>
  )
}

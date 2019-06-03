import { Theme } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import React from "react"
import Brand from "./Brand"
import Link from "./link"

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => ({
  root: { [breakpoints.down("sm")]: { padding: spacing(0) } }
}))

export default () => {
  const classes = useStyles()
  return (
    <AppBar elevation={0} position="sticky">
      <Container className={classes.root}>
        <Toolbar>
          <Brand />
          <Link color="textPrimary" to="/docs/get-started" underline="none">
            Get Started
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

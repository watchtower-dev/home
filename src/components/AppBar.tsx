import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import React from "react"
import Brand from "./Brand"
import Link from "./link"

export default () => {
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar>
        <Brand />
        <ul>
          <Link color="textPrimary" to="/docs/get-started" underline="none">
            Get Started
          </Link>
        </ul>
      </Toolbar>
    </AppBar>
  )
}

import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import theme from "../theme"
import Link from "./link"

const useStyles = makeStyles(() => ({
  root: {
    alignItems: `center`,
    display: `flex`,
    justifyContent: `center`
  }
}))

export default ({ inverse }: { inverse?: boolean }) => {
  const classes = useStyles()
  return (
    <Container
      className={classes.root}
      style={{
        marginBottom: inverse ? theme.spacing(10) : `0`,
        marginTop: inverse ? `0` : theme.spacing(10)
      }}
    >
      <Link to="/docs/get-started">
        <Button color="primary" size="large" variant="contained">
          Get Started
        </Button>
      </Link>
    </Container>
  )
}

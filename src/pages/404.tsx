import { Theme } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import AppBar from "../components/AppBar"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  root: {
    marginTop: spacing(3),
    textAlign: `center`
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <Layout title="Page not found - Watchtower">
      <AppBar />
      <Container className={classes.root}>
        <Typography variant="h4">Page not found!</Typography>
        <Typography variant="subtitle1">
          Sorry, but the page you were looking for could not be found.
        </Typography>
      </Container>
      <Footer />
    </Layout>
  )
}

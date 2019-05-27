import { Theme } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    backgroundColor: palette.primary.main,
    paddingTop: spacing(10),
    textAlign: `center`
  }
}))

export default () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/icon-512x512.png/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <header className={classes.root}>
      <Container>
        <Grid alignItems="center" container direction="column" spacing={5}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h3">
              Trust your APIs
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h4">
              Spot problems before your customers do.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Img
              fixed={data.logo.childImageSharp.fixed}
              alt={"Watchtower Logo"}
            />
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

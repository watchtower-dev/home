import { Theme } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { ReactNodeLike } from "prop-types"
import React from "react"
import Clock from "../icons/Clock"
import Confirmation from "../icons/Confirmation"
import Downtime from "../icons/Downtime"
import Global from "../icons/Global"

const useStyles = makeStyles(({ breakpoints, spacing }: Theme) => ({
  art: {
    height: `100%`,
    maxWidth: `400px`,
    width: `100%`
  },
  left: {
    textAlign: "left"
  },
  root: {
    padding: spacing(8, 2),
    textAlign: `right`,
    [breakpoints.down("xs")]: {
      textAlign: `left`
    }
  },
  text: {
    display: `flex`,
    flexDirection: `column`,
    height: `100%`,
    justifyContent: `center`
  }
}))

export default () => {
  const classes = useStyles()
  const { breakpoints } = useTheme()
  const matches = useMediaQuery(breakpoints.down("xs"))

  const Text = ({ title, desc }: { title: string; desc: string }) => (
    <div className={classes.text}>
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      <Typography component="h3" variant="subtitle1">
        {desc}
      </Typography>
    </div>
  )

  const Inverse = ({
    first,
    second
  }: {
    first: ReactNodeLike
    second: ReactNodeLike
  }) => (
    <>
      {matches ? (
        <>
          <Grid item xs={12} sm={6}>
            {second}
          </Grid>
          <Grid item xs={12} sm={6}>
            {first}
          </Grid>
        </>
      ) : (
        <>
          <Grid item xs={12} sm={6}>
            {first}
          </Grid>
          <Grid className={classes.left} item xs={12} sm={6}>
            {second}
          </Grid>
        </>
      )}
    </>
  )

  return (
    <Container className={classes.root}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Text
            title="Reduce expensive downtime"
            desc="Would you know if your site went down overnight? Catch bugs in test environments. And reduce debugging times when they reach production."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Downtime className={classes.art} />
        </Grid>
        <Inverse
          first={<Confirmation className={classes.art} />}
          second={
            <Text
              title="Trust your APIs"
              desc="Prevent regressions by verifying responses are returning expected data."
            />
          }
        />
        <Grid item xs={12} sm={6}>
          <Text
            title="Monitor globally"
            desc="Test your app worldwide on any schedule to catch problems before your customers. Wherever they may be."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Global className={classes.art} />
        </Grid>
        <Inverse
          first={<Clock className={classes.art} />}
          second={
            <Text
              title="Save time"
              desc="Put an end to clunky UIs with no way to version or rollback changes. Tests are just text files. Check them into source control with your code."
            />
          }
        />
      </Grid>
    </Container>
  )
}

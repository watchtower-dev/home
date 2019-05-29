import { Theme } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import GithubIcon from "../icons/Github"
import TwitterIcon from "../icons/Twitter"
import ExternalLink from "./ExternalLink"
import Link from "./link"

const social = [
  {
    icon: GithubIcon,
    label: "Link to Github Profile",
    link: "https://github.com/watchtower-dev"
  },
  {
    icon: TwitterIcon,
    label: "Link to Twitter Profile",
    link: "https://twitter.com/watchtower_dev"
  }
]

const useStyles = makeStyles(({ breakpoints, palette, spacing }: Theme) => ({
  footer: {
    borderTop: `1px solid ${palette.divider}`,
    marginTop: spacing(8),
    paddingBottom: spacing(3),
    paddingTop: spacing(3),
    [breakpoints.up("sm")]: {
      paddingBottom: spacing(6),
      paddingTop: spacing(6)
    }
  },
  icon: {
    color: palette.text.secondary,
    marginRight: spacing(2),
    marginTop: spacing(0.5)
  },
  list: {
    listStyle: `none`,
    margin: 0,
    padding: 0
  }
}))

const SecondaryLink = (props: any) => (
  <Link variant="subtitle1" color="textSecondary" {...props} />
)

export default () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Container component="footer" className={classes.footer}>
        <Grid container spacing={2} justify="space-evenly">
          <Grid item xs={6} sm={4}>
            <ul className={classes.list}>
              <li>
                <SecondaryLink to="/legal/privacy">
                  Privacy Policy
                </SecondaryLink>
              </li>
              <li>
                <SecondaryLink to="/legal/terms">
                  Terms of Service
                </SecondaryLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={2}>
            <ul className={classes.list}>
              <li>
                {social.map(({ icon: Icon, label, link }, i) => (
                  <ExternalLink key={i} href={link} label={label}>
                    <Icon className={classes.icon} />
                  </ExternalLink>
                ))}
              </li>
              <li>
                <Typography variant="caption" color="textSecondary">
                  © {new Date().getFullYear()} Watchtower.dev
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

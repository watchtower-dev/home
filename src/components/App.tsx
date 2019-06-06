import { Theme } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import React from "react"
import KeyIcon from "../icons/Key"
import MonitorIcon from "../icons/Monitor"
import NavBar, { NavLink } from "./NavBar"

const useStyles = makeStyles(({ mixins, spacing }: Theme) => ({
  appBarSpacer: mixins.toolbar,
  container: {
    paddingBottom: spacing(4),
    paddingTop: spacing(4)
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    padding: spacing(2)
  },
  root: {
    display: "flex"
  }
}))

export default (props: any) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NavBar
        items={
          <>
            <NavLink to="app">
              <ListItem button>
                <ListItemIcon>
                  <MonitorIcon />
                </ListItemIcon>
                <ListItemText primary="Monitors" />
              </ListItem>
            </NavLink>
            <NavLink to="app/keys">
              <ListItem button>
                <ListItemIcon>
                  <KeyIcon />
                </ListItemIcon>
                <ListItemText primary="API Keys" />
              </ListItem>
            </NavLink>
          </>
        }
        showMenu
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Paper className={classes.paper}>{props.children}</Paper>
        </Container>
      </main>
    </div>
  )
}

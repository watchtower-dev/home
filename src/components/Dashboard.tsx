import { Theme } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Container from "@material-ui/core/Container"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import clsx from "clsx"
import { navigate } from "gatsby"
import React from "react"
import KeyIcon from "../icons/Key" // ChevronLeftIcon
import LogoutIcon from "../icons/Logout"
import MenuIcon from "../icons/Menu"
import { logout } from "../utils/auth"
import { mainListItems, secondaryListItems } from "./listItems"
import Percentiles from "./Percentiles"
import Runs from "./Runs"

const drawerWidth = 240

const useStyles = makeStyles(
  ({ breakpoints, mixins, spacing, transitions, zIndex }: Theme) => ({
    appBar: {
      transition: transitions.create(["width", "margin"], {
        duration: transitions.duration.leavingScreen,
        easing: transitions.easing.sharp
      }),
      zIndex: zIndex.drawer + 1
    },
    appBarShift: {
      marginLeft: drawerWidth,
      transition: transitions.create(["width", "margin"], {
        duration: transitions.duration.enteringScreen,
        easing: transitions.easing.sharp
      }),
      width: `calc(100% - ${drawerWidth}px)`
    },
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
    drawerPaper: {
      position: "relative",
      transition: transitions.create("width", {
        duration: transitions.duration.enteringScreen,
        easing: transitions.easing.sharp
      }),
      whiteSpace: "nowrap",
      width: drawerWidth
    },
    drawerPaperClose: {
      overflowX: "hidden",
      transition: transitions.create("width", {
        duration: transitions.duration.leavingScreen,
        easing: transitions.easing.sharp
      }),
      width: spacing(7),
      [breakpoints.up("sm")]: {
        width: spacing(9)
      }
    },
    fixedHeight: {
      height: 240
    },
    menuButton: {
      marginRight: spacing(4.5)
    },
    menuButtonHidden: {
      display: "none"
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: spacing(2)
    },
    root: {
      display: "flex"
    },
    title: {
      flexGrow: 1
    },
    toolbar: {
      paddingRight: spacing(3)
    },
    toolbarIcon: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      padding: spacing(0, 1),
      ...mixins.toolbar
    }
  })
)

export default () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <div className={classes.root}>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Watchtower
          </Typography>
          <IconButton
            color="inherit"
            onClick={(e: any) => {
              e.preventDefault()
              logout()
              navigate("/")
            }}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <KeyIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Percentiles />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Runs />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

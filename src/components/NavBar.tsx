import { Theme } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import clsx from "clsx"
import React, { MouseEvent, useState } from "react"
import ChevronLeftIcon from "../icons/ChevronLeft"
import MenuIcon from "../icons/Menu"
import UserIcon from "../icons/User"
import { logout } from "../utils/auth"
import Brand from "./Brand"

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
    menuButton: { marginRight: spacing(4.5) },
    menuButtonHidden: { display: "none" },
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: spacing(2)
    },
    toolbar: { paddingRight: spacing(3) },
    toolbarIcon: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      padding: spacing(0, 1),
      ...mixins.toolbar
    }
  })
)

export default ({ items }: { items: JSX.Element }) => {
  const classes = useStyles()
  const [anchor, setAnchor] = useState(null as null | HTMLElement)
  const menuOpen = Boolean(anchor)
  const [open, setOpen] = useState(true)
  const handleDrawerOpen = () => setOpen(true)
  const handleDrawerClose = () => setOpen(false)
  const handleMenuOpen = (e: MouseEvent<HTMLButtonElement, any>) =>
    setAnchor(e.currentTarget)
  const handleMenuClose = () => setAnchor(null)

  const logOut = () => {
    handleMenuClose()
    logout()
  }

  return (
    <>
      <AppBar
        elevation={0}
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
          <Brand />
          <IconButton
            aria-owns={menuOpen ? "menu-appbar" : undefined}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <UserIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchor}
            anchorOrigin={{
              horizontal: "right",
              vertical: "top"
            }}
            transformOrigin={{
              horizontal: "right",
              vertical: "top"
            }}
            open={menuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={logOut}>Log Out</MenuItem>
          </Menu>
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
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{items}</List>
      </Drawer>
    </>
  )
}

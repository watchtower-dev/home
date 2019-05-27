import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Logo from "../../static/favicon.ico"
import Link from "./link"

const useStyles = makeStyles(() => ({
  avatar: {
    height: 25,
    width: 25
  },
  logo: {
    color: "inherit",
    flexGrow: 1,
    textDecoration: "inherit"
  },
  root: {
    alignItems: `center`,
    display: `flex`,
    flexGrow: 1,
    justifyContent: `flex-start`
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <IconButton color="inherit">
        <Link to="/" className={classes.logo}>
          <Avatar alt="Watchtower Logo" src={Logo} className={classes.avatar} />
        </Link>
      </IconButton>
      <Typography component="h1" variant="h6" color="inherit">
        Watchtower
      </Typography>
    </div>
  )
}

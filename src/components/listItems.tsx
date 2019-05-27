import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import React from "react"
import KeyIcon from "../icons/Key"
import DashboardIcon from "../icons/Monitor" // Dashboard
import MonitorIcon from "../icons/Monitor"
import SettingsIcon from "../icons/Monitor" // Settings

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <MonitorIcon />
      </ListItemIcon>
      <ListItemText primary="Monitors" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <KeyIcon />
      </ListItemIcon>
      <ListItemText primary="API Keys" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
  </div>
)

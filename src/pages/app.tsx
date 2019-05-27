import React from "react"
import Dashboard from "../components/Dashboard"
import PrivateRoute from "../components/PrivateRoute"

export default () => <PrivateRoute path="/app" component={Dashboard} />

import { Router } from "@reach/router"
import React from "react"
import { isAuthenticated, isBrowser, login } from "../utils/auth"

export default ({ component: Component, ...rest }: any) => {
  if (isBrowser && !isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  return (
    <Router>
      <Component {...rest} />
    </Router>
  )
}

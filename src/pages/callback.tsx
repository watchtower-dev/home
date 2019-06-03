import { navigate } from "gatsby"
import React from "react"
import { handleAuthentication } from "../utils/auth"

export default () => {
  handleAuthentication(() => navigate("/app"))
  return <p>Loading...</p>
}

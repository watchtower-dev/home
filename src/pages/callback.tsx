import { navigate } from "gatsby"
import React from "react"
import Loading from "../components/Loading"
import { handleAuthentication } from "../utils/auth"

export default () => {
  handleAuthentication(() => navigate("/app"))
  return <Loading />
}

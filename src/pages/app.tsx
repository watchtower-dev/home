import { Router } from "@reach/router"
import { Client, IMonRes, IMonsRes, IRootRes } from "@watchtower-dev/sdk-js"
import React, { useEffect, useState } from "react"
import ApiKeys from "../components/ApiKeys"
import App from "../components/App"
import Monitor from "../components/Monitor"
import Monitors from "../components/Monitors"
import { data, isAuthenticated, isBrowser, login } from "../utils/auth"

export default () => {
  if (isBrowser && !isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const client = new Client(data.tok)
  const [loading, setLoading] = useState(true)
  const [mons, setMons] = useState([] as IMonRes[])
  const [root, setRoot] = useState({} as IRootRes)

  useEffect(() => {
    const get = async () => {
      const rr = (await client.getRoot()).data
      setRoot(rr)
      setMons((await client.get<IMonsRes>(rr.links.monitors)).data.items)
      setLoading(false)
    }
    get()
  }, [])

  return (
    <Router>
      <App path="app">
        <Monitors loading={loading} mons={mons} path="/" />
        <Monitor
          mon={mons.find(m => m.id === location.pathname.split("/")[2])}
          path="/:mId"
        />
        <ApiKeys root={root} path="keys" />
      </App>
    </Router>
  )
}

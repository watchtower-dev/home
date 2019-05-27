import React, { useEffect, useState } from "react"
import ErrorBoundary from "./src/components/ErrorBoundry"
import { silentAuth } from "./src/utils/auth"
import "./src/global.css"

const SilentAuth = ({ children }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    silentAuth(() => setLoading(false))
  })

  return !loading && <React.Fragment>{children}</React.Fragment>
}

export const wrapRootElement = ({ element }) => (
  <ErrorBoundary>
    <SilentAuth>{element}</SilentAuth>
  </ErrorBoundary>
)

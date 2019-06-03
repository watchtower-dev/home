import React, { useEffect, useState } from "react"
import ErrorBoundary from "./src/components/ErrorBoundary"
import { silentAuth } from "./src/utils/auth"
import "./src/global.css"

const SilentAuth = ({ children }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    silentAuth(() => setLoading(false))
  })
  return !loading && <>{children}</>
}

export const wrapRootElement = ({ element }) => (
  // <React.StrictMode>
  <ErrorBoundary>
    <SilentAuth>{element}</SilentAuth>
  </ErrorBoundary>
  // </React.StrictMode>
)

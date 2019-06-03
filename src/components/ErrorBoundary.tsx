import * as Sentry from "@sentry/browser"
import { ReactNodeLike } from "prop-types"
import React from "react"

export default class ErrorBoundary extends React.Component<
  { children: ReactNodeLike },
  { error: any }
> {
  public static getDerivedStateFromError = () => ({ hasError: true })

  constructor(props: any) {
    super(props)
    this.state = { error: null }
  }

  public componentDidCatch = (error: any, errorInfo: any) => {
    this.setState({ error })
    Sentry.configureScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
    })
    Sentry.captureException(error)
  }

  public render = () =>
    this.state.error ? <h1>Something went wrong!</h1> : this.props.children
}

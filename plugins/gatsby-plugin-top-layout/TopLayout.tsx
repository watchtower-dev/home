import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import { ReactNodeLike } from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import theme from "../../src/theme"

export default ({ children }: { children: ReactNodeLike }) => (
  <React.Fragment>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
    </Helmet>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </React.Fragment>
)

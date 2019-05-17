import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../../styles/GlobalStyles"
import theme from "../../styles/theme"
import SEO from "./SEO"

export default ({ title, children }: { title?: string; children: any }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO title={title} />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

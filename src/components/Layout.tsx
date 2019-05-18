import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"
import theme from "../styles/theme"
import SEO from "./SEO"

interface IProps {
  children: any
  [k: string]: any
}

export default ({ children, ...other }: IProps) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO {...other} />
      <GlobalStyles />
      {children}
    </>
  </ThemeProvider>
)

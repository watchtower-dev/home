import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  color: {
    black: {
      light: "#564F62",
      lighter: "#ABA8AF",
      regular: "#211E26"
    },
    // https://material.io/design/color/#tools-for-picking-colors
    primary: "#639ce7",
    // https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=639ce7&secondary.color=ae63e7
    secondary: "#266eb4",
    white: {
      dark: "#F6F6F6",
      regular: "#FFFFFF"
    },
    inlineCodeBg: {
      dark: "hsl(222, 14%, 25%)",
      light: "rgba(255, 229, 100, 0.2)"
    }
  },
  font: `-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`,
  fontSize: {
    large: "font-size: 28px;",
    larger: "font-size: 34px;",
    regular: "font-size: 22px;",
    small: "font-size: 18px;",
    xlarge: "font-size: 42px;",
    xsmall: "font-size: 12px;"
  },
  screen: {
    lg: "1199px",
    md: "991px",
    sm: "767px",
    xs: "575px"
  }
}

export default theme

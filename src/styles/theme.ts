import { DefaultTheme } from "styled-components"

const theme: DefaultTheme = {
  color: {
    black: {
      light: "#564F62",
      lighter: "#ABA8AF",
      regular: "#211E26"
    },
    primary: "#639ce7",
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
    large: "font-size: 30px; line-height: 40px;",
    larger: "font-size: 36px; line-height: 48px;",
    regular: "font-size: 24px; line-height: 32px;",
    small: "font-size: 20px; line-height: 30px;",
    xlarge: "font-size: 48px; line-height: 56px;",
    xsmall: "font-size: 12px; line-height: 22px;"
  },
  screen: {
    lg: "1199px",
    md: "991px",
    sm: "767px",
    xs: "575px"
  }
}

export default theme

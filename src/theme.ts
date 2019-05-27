import red from "@material-ui/core/colors/red"
import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
  palette: {
    background: {
      default: "#fff"
    },
    error: {
      main: red.A400
    },
    // https://material.io/design/color/#tools-for-picking-colors
    primary: {
      main: "#639ce7"
    },
    // https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=639ce7&secondary.color=ae63e7
    secondary: {
      main: "#ae63e7"
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
})

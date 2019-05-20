import "styled-components"

declare module "styled-components" {
  // tslint:disable-next-line
  export interface DefaultTheme {
    color: {
      black: {
        light: string
        lighter: string
        regular: string
      }
      primary: string
      secondary: string
      white: {
        dark: string
        regular: string
      }
      inlineCodeBg: {
        dark: string
        light: string
      }
    }
    font: string
    fontSize: {
      large: string
      larger: string
      regular: string
      small: string
      xlarge: string
      xsmall: string
    }
    screen: {
      lg: string
      md: string
      sm: string
      xs: string
    }
  }
}

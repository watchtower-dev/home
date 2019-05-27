import React from "react"
import SEO from "./SEO"

interface IProps {
  children: any
  [k: string]: any
}

export default ({ children, ...other }: IProps) => (
  <>
    <SEO {...other} />
    {children}
  </>
)

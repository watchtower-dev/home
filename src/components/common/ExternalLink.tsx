import React from "react"

export default ({
  href,
  children,
  ...other
}: Partial<{ href: string; children: React.ReactNode }>) => (
  <a href={href} {...other} rel="noreferrer noopener" target="_blank">
    {children}
  </a>
)

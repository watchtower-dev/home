import React from "react"

interface IProps {
  children: React.ReactNode
  href: string
  label: string
}

export default ({ children, href, label, ...other }: IProps) => (
  <a
    aria-label={label}
    href={href}
    {...other}
    rel="noreferrer noopener"
    target="_blank"
  >
    {children}
  </a>
)

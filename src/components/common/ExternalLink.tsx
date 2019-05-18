import React from "react"

export default ({
  href,
  label,
  children,
  ...other
}: Partial<{ href: string; label: string; children: React.ReactNode }>) => (
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

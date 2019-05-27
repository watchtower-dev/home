import Typography from "@material-ui/core/Typography"
import { ReactNodeLike } from "prop-types"
import React from "react"

export default ({ children }: { children: ReactNodeLike }) => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {children}
  </Typography>
)

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"
import React from "react"
import Title from "./Title"

const useStyles = makeStyles({
  context: {
    flex: 1
  }
})

export default () => {
  const classes = useStyles()

  const Percentile = ({
    percent,
    resTime
  }: {
    percent: number
    resTime: number
  }) => (
    <div>
      <Typography color="textSecondary" className={classes.context}>
        {percent}th Percentile
      </Typography>
      <Typography component="p" variant="h5">
        {resTime}ms
      </Typography>
    </div>
  )

  return (
    <React.Fragment>
      <Title>Total Response Time</Title>
      <Percentile percent={50} resTime={150} />
      <Percentile percent={95} resTime={180} />
      <Percentile percent={99} resTime={200} />
    </React.Fragment>
  )
}

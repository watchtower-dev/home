import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { IMonRes } from "@watchtower-dev/sdk-js"
import React from "react"
import Link from "./link"
import Loader from "./Loader"
import Title from "./Title"

export default ({
  loading,
  mons
}: {
  loading: boolean
  mons: IMonRes[]
  path: string
}) => (
  <>
    <Title>Monitors</Title>
    <Grid container spacing={2}>
      {loading ? (
        <Grid item xs={12} sm={6}>
          <Card elevation={0}>
            <CardContent style={{ padding: 10 }}>
              <Typography variant="h5" component="h2">
                <Loader />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        mons.map(m => (
          <Grid key={m.id} item xs={12} sm={6}>
            <Card elevation={0}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {m.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {m.schedule === 0
                    ? "Disabled"
                    : `Every ${m.schedule} minutes`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link color="textPrimary" to={`app/${m.id}`} underline="none">
                    View Runs
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  </>
)

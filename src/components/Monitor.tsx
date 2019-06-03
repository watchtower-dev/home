import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { Client, IMonRes, IRunRes, IRunsRes } from "@watchtower-dev/sdk-js"
import React, { useEffect, useState } from "react"
import { data } from "../utils/auth"
import RunItem from "./RunItem"
import Title from "./Title"

export default ({ mon }: { mon?: IMonRes; path: string }) => {
  const client = new Client(data.tok)
  const [runs, setRuns] = useState([] as IRunRes[])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const get = async () => {
      if (mon) {
        const rr = (await client.get<IRunsRes>(mon.links.runs)).data
        setRuns(rr.items)
        setLoading(false)
      }
    }
    get()
  }, [mon])

  return (
    <>
      <Title>{mon && mon.name}</Title>
      <Grid container>
        <Grid item xs={12}>
          <Card elevation={0}>
            <CardContent>
              <Typography variant="body1" component="div">
                {loading
                  ? "Loading..."
                  : runs.length
                  ? runs.map(r => <RunItem key={r.id} run={r} />)
                  : "None"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

import { Theme } from "@material-ui/core"
import CircularProgress from "@material-ui/core/CircularProgress"
import Collapse from "@material-ui/core/Collapse"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"
import { error } from "@therockstorm/utils"
import {
  Client,
  IAssert,
  ICheckRes,
  IRunByIdRes,
  IRunRes
} from "@watchtower-dev/sdk-js"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import React, { useState } from "react"
import Check from "../icons/Check"
import ChevronDown from "../icons/ChevronDown"
import ChevronUp from "../icons/ChevronUp"
import Error from "../icons/Error"
import { data } from "../utils/auth"

dayjs.extend(relativeTime)

const useStyles = makeStyles(({ spacing }: Theme) => ({
  lg: { paddingTop: 5 },
  md: { paddingTop: 10 },
  nested: { paddingLeft: spacing(4) },
  sm: { paddingTop: 15 },
  text: { overflowWrap: "break-word" },
  title: { margin: `${spacing(4)}px 0 ${spacing(2)}px` }
}))

const capitalize = (s: string) =>
  s ? `${s.charAt(0).toUpperCase()}${s.slice(1)}` : s

const Result = ({ err, className }: { err: any; className: string }) =>
  err ? (
    <Error color={"error"} className={className} />
  ) : (
    <Check color={"primary"} className={className} />
  )

const op = (a: IAssert) =>
  typeof a.equal !== "undefined"
    ? `equals ${a.equal}`
    : typeof a.greaterThan !== "undefined"
    ? `is greater than ${a.greaterThan}`
    : typeof a.lessThan !== "undefined"
    ? `is less than ${a.lessThan}`
    : typeof a.type !== "undefined"
    ? `is of type ${a.type}`
    : typeof a.regex !== "undefined"
    ? `matches ${a.regex}`
    : "is defined"

const Secondary = ({ c, className }: { c: ICheckRes; className: string }) => (
  <span>
    {`${c.entry.request.method} ${c.entry.request.url} ${
      c.entry.time ? ` ${c.entry.time.toFixed(0)} ms` : ""
    }`}
    {c.assertions.map((a, i) => (
      <span key={i}>
        <br />
        <Result err={Boolean(a.error)} className={className} />{" "}
        {`Assert ${a.jsonPath} ${op(a)}`}
      </span>
    ))}
  </span>
)

export default ({ run }: { run: IRunRes }) => {
  const classes = useStyles()
  const client = new Client(data.tok)
  const [runDetails, setRunDetails] = useState({} as {
    [url: string]: IRunByIdRes
  })
  const [open, setOpen] = useState({} as { [url: string]: boolean })

  const fetchRun = (url: string) => {
    setOpen({ ...open, [url]: !open[url] })
    if (!runDetails[url]) {
      client
        .get<IRunByIdRes>(url)
        .then(r => {
          setRunDetails({ [url]: r.data, ...runDetails })
        })
        .catch(error)
    }
  }

  return (
    <div>
      <ListItem button disableRipple onClick={() => fetchRun(run.links.self)}>
        <ListItemText
          className={classes.text}
          primary={
            <span>
              {run.result === "passed" ? (
                <Check color={"primary"} className={classes.lg} />
              ) : (
                <Error color={"error"} className={classes.lg} />
              )}
              {` ${capitalize(run.result)}`}
            </span>
          }
          secondary={
            <Tooltip
              title={dayjs(run.created).toString()}
              placement="bottom-start"
            >
              <span>{dayjs(run.created).fromNow()}</span>
            </Tooltip>
          }
        />
        {open[run.links.self] ? <ChevronUp /> : <ChevronDown />}
      </ListItem>
      <Collapse in={open[run.links.self]} timeout="auto" unmountOnExit>
        <List disablePadding>
          {runDetails[run.links.self] && runDetails[run.links.self].checks ? (
            runDetails[run.links.self].checks.map(c => {
              const res = (
                <Result err={Boolean(c.error)} className={classes.md} />
              )
              const name = ` ${
                c.entry.response ? `${c.entry.response.status} ` : ""
              } ${c.name}`
              return (
                <ListItem className={classes.nested} key={c.name}>
                  <ListItemText
                    className={classes.text}
                    primary={
                      c.error ? (
                        <Tooltip title={c.error} placement="bottom-start">
                          <span>
                            {res}
                            {name}
                          </span>
                        </Tooltip>
                      ) : (
                        <span>
                          {res}
                          {name}
                        </span>
                      )
                    }
                    secondary={<Secondary c={c} className={classes.sm} />}
                  />
                </ListItem>
              )
            })
          ) : (
            <ListItem className={classes.nested}>
              <CircularProgress />
            </ListItem>
          )}
        </List>
      </Collapse>
    </div>
  )
}

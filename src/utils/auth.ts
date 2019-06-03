import * as Sentry from "@sentry/browser"
import { error } from "@therockstorm/utils"
import { Auth0DecodedHash, Auth0Error, WebAuth } from "auth0-js"

export const isBrowser = typeof window !== "undefined"

export const data = { aId: "", tok: "" }
const baseUrl = isBrowser
  ? `${window.location.protocol}//${window.location.host}`
  : `localhost:8000`
const auth0 = isBrowser
  ? new WebAuth({
      audience: "https://api.watchtower.dev/",
      clientID: "td2uAIN6YZ90MmicetnwvSSJ99i2z31T",
      domain: "watchtower-test.auth0.com",
      redirectUri: `${baseUrl}/callback`,
      responseType: "token id_token",
      scope: "openid"
    })
  : ({} as WebAuth)

export const login = () => (isBrowser ? auth0.authorize() : undefined)

export const logout = () => {
  data.aId = ""
  data.tok = ""
  localStorage.setItem("loggedIn", "false")

  auth0.logout({ returnTo: baseUrl })
}

export const silentAuth = (callback: () => void) => {
  if (!isBrowser) return
  if (!isAuthenticated()) return callback()

  auth0.checkSession({}, setSession(callback))
}

export const handleAuthentication = (
  callback = () => {
    return
  }
) => (isBrowser ? auth0.parseHash(setSession(callback)) : undefined)

export const isAuthenticated = (): boolean =>
  isBrowser ? localStorage.getItem("loggedIn") === "true" : false

const setSession = (callback: () => void) => (
  err: Auth0Error | null,
  res: Auth0DecodedHash | null
) => {
  if (!isBrowser) return

  if (err) {
    if (err.error === "login_required") return login()

    error(err)
    return logout()
  }

  if (!res || !res.accessToken || !res.idTokenPayload) {
    Sentry.captureMessage(`Invalid auth res. ${JSON.stringify(res)}`)
    return
  }

  data.aId = res.idTokenPayload.sub.replace("auth0|", "")
  data.tok = res.accessToken
  localStorage.setItem("loggedIn", "true")
  Sentry.configureScope(s => s.setUser({ id: data.aId }))
  return callback()
}

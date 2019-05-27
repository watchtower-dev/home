//https://csp-evaluator.withgoogle.com/
const data = `data:`
const ga = `https://www.google-analytics.com`
const none = `'none'`
const self = `'self'`
const unsafe = `'unsafe-inline'`
const csp = {
  "connect-src": [self, ga, "https://sentry.io"],
  "default-src": [none],
  "font-src": [self, "https://fonts.gstatic.com"],
  "img-src": [self, ga, data],
  "manifest-src": [self],
  "prefetch-src": [self, "https://*.google.com", ga],
  "script-src": [self, ga, unsafe, data],
  "style-src": [unsafe]
}

// https://github.com/WICG/feature-policy/blob/master/features.md
const fp = {
  accelerometer: [none],
  "ambient-light-sensor": [none],
  autoplay: [none],
  camera: [none],
  "encrypted-media": [none],
  fullscreen: [none],
  geolocation: [none],
  gyroscope: [none],
  magnetometer: [none],
  microphone: [none],
  midi: [none],
  payment: [none],
  "picture-in-picture": [none],
  speaker: [none],
  usb: [none],
  vr: [none]
}

const toPolicy = p =>
  Object.entries(p)
    .map(([k, v]) => `${k} ${v.join(" ")}`)
    .join(";")

module.exports = {
  siteMetadata: {
    author: `Rocky Warren`,
    description: `API Monitoring, Testing, and Uptime`,
    siteUrl: `https://www.watchtower.dev/`,
    social: { twitter: "@therockstorm" },
    title: `Watchtower`
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-140427791-1` }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Watchtower`,
        short_name: `Watchtower`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#639ce7`,
        display: `minimal-ui`,
        icon: `content/assets/icon-512x512.png`
      }
    },
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            `Content-Security-Policy: ${toPolicy(csp)}`,
            `Feature-Policy: ${toPolicy(fp)}`,
            `Referrer-Policy: same-origin`,
            `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
          ]
        }
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://8a15d5eb71a640e2abfb39b6c1df1568@sentry.io/1380086",
        environment: process.env.STAGE,
        enabled: ["prod", "test"].includes(process.env.STAGE)
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-top-layout",
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/docs`,
        name: `docs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/legal`,
        name: `legal`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 624 }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`
  ]
}

module.exports = {
  siteMetadata: {
    author: `Rocky Warren`,
    description: `API Monitoring, Testing, and Uptime`,
    siteUrl: `https://www.watchtower.dev/`,
    social: { twitter: "@therockstorm" },
    title: `Watchtower`
  },
  plugins: [
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
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 624 }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank"
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: `UA-140427791-1` }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            //https://csp-evaluator.withgoogle.com/
            `Content-Security-Policy: default-src 'none';script-src 'self' https://rockywarren.us15.list-manage.com https://www.google-analytics.com 'unsafe-inline' data:;style-src 'unsafe-inline';img-src 'self' https://www.google-analytics.com data:;font-src 'self' https://fonts.gstatic.com;connect-src 'self' https://www.google-analytics.com;manifest-src 'self';prefetch-src 'self' https://*.google.com https://www.google-analytics.com;`,
            // https://github.com/WICG/feature-policy/blob/master/features.md
            `Feature-Policy: accelerometer 'none';ambient-light-sensor 'none';autoplay 'none';camera 'none';encrypted-media 'none';fullscreen 'none';geolocation 'none';gyroscope 'none';magnetometer 'none';microphone 'none';midi 'none';payment 'none';picture-in-picture 'none';speaker 'none';usb 'none';vr 'none';`,
            `Referrer-Policy: same-origin`,
            `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
          ]
        }
      }
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
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://rockywarren.us15.list-manage.com/subscribe/post?u=75d4f6bf1a757440913db553e&amp;id=82b10d3cdc"
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`
  ]
}

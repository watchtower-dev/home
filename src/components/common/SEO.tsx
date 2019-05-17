import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

export default ({ title }: { title?: string }) => {
  const { site }: { site: ISite } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )
  const meta = site.siteMetadata
  const t = title || `${meta.title} - ${meta.description}`

  return (
    <Helmet>
      <meta property="og:title" content={t} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:description" content={meta.description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta.social.twitter} />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:domain" content={meta.siteUrl} />

      <meta name="description" content={meta.description} />
      <meta
        name="keywords"
        content={["api", "monitoring", "testing", "uptime"].join(", ")}
      />
      <meta name="author" content={meta.author} />
      <title>{t}</title>
      <html lang="en" />
    </Helmet>
  )
}

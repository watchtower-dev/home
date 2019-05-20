import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

type Props = Partial<{
  title: string
  description: string
  slug: string
}>

export default ({ title, description, slug }: Props) => {
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
  const t = `${title} - ${meta.title}` || `${meta.description} - ${meta.title}`
  const desc = description || meta.description
  const url = `${site.siteMetadata.siteUrl}${slug ? `docs${slug}` : ""}`
  return (
    <Helmet>
      <meta property="og:title" content={t} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={desc} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={meta.social.twitter} />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:domain" content={url} />

      <meta name="description" content={desc} />
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

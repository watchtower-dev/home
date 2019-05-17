import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/common/Layout"
import SEO from "../components/common/SEO"

export default () => (
  <Layout>
    <SEO title="404: Not Found" />
    <h1>Not Found</h1>
    <p>Whoops, this page doesn&#39;t exist.</p>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

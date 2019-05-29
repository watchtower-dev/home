import { Theme } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { graphql, Link } from "gatsby"
import React from "react"
import AppBar from "../components/AppBar"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

const useStyles = makeStyles(({ spacing }: Theme) => ({
  list: {
    display: `flex`,
    justifyContent: `space-between`,
    listStyle: `none`,
    marginTop: spacing(5),
    padding: 0
  },
  root: {
    marginTop: spacing(3)
  }
}))

interface IProps {
  data: { markdownRemark: INode }
  location: ILocation
  pageContext: IPageContext
}

export default ({ data, pageContext }: IProps) => {
  const classes = useStyles()
  const doc = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout
      title={doc.frontmatter.title}
      description={doc.frontmatter.description || doc.excerpt}
      slug={doc.fields.slug}
    >
      <AppBar />
      <Container className={classes.root}>
        <main>
          <article>
            <header>
              <Typography variant="h4">{doc.frontmatter.title}</Typography>
            </header>
            <div dangerouslySetInnerHTML={{ __html: doc.html }} />
          </article>
        </main>
        <aside>
          <nav>
            <ul className={classes.list}>
              <li>
                {previous && (
                  <Link to={`/docs${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={`/docs${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </aside>
      </Container>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query DocBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
      }
      fields {
        slug
      }
    }
  }
`

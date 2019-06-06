import { Theme } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { graphql, Link } from "gatsby"
import React from "react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import NavBar, { NavLink } from "../components/NavBar"

const useStyles = makeStyles(({ mixins, spacing }: Theme) => ({
  appBarSpacer: mixins.toolbar,
  container: {
    paddingBottom: spacing(4),
    paddingTop: spacing(4)
  },
  content: { flexGrow: 1 },
  list: {
    display: `flex`,
    justifyContent: `space-between`,
    listStyle: `none`,
    marginTop: spacing(4),
    padding: 0
  },
  root: { display: "flex" }
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
      description={doc.frontmatter.description || doc.excerpt}
      slug={doc.fields.slug}
      title={doc.frontmatter.title}
    >
      <div className={classes.root}>
        <NavBar
          items={
            <>
              <NavLink to="docs/get-started">
                <ListItem button>
                  <ListItemText primary="Get Started" />
                </ListItem>
              </NavLink>
              <NavLink to="docs/yaml-reference">
                <ListItem button>
                  <ListItemText primary="YAML Reference" />
                </ListItem>
              </NavLink>
            </>
          }
          tempDrawer
        />
        <Container maxWidth="lg" className={classes.container}>
          <div className={classes.appBarSpacer} />
          <main className={classes.content}>
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
          <Footer />
        </Container>
      </div>
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

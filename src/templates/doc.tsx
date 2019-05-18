import { graphql } from "gatsby"
import React from "react"
import Footer from "../components/Footer"
import { Container, Section } from "../components/global"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

interface IProps {
  data: { site: ISite; markdownRemark: INode }
  location: ILocation
  pageContext: IPageContext
}

export default ({ data }: IProps) => {
  const post = data.markdownRemark
  // const { previous, next } = pageContext

  return (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      slug={post.fields.slug}
    >
      <Navbar />
      <Container>
        <Section>
          <main>
            <article>
              <header>
                <h1>{post.frontmatter.title}</h1>
                <p
                  style={{
                    display: `block`,
                    marginBottom: `1px`,
                    marginTop: `-1px`
                  }}
                >
                  {/* {post.frontmatter.date} */}
                </p>
              </header>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
          </main>
          {/* <hr style={{ marginBottom: `1px` }} /> */}
          {/* <aside>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </aside> */}
        </Section>
      </Container>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query DocBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      fields {
        slug
      }
    }
  }
`

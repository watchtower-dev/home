import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import { Container, Section } from "../components/global"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"

interface IProps {
  data: { markdownRemark: INode }
  location: ILocation
  pageContext: IPageContext
}

export default ({ data, pageContext }: IProps) => {
  const doc = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout
      title={doc.frontmatter.title}
      description={doc.frontmatter.description || doc.excerpt}
      slug={doc.fields.slug}
    >
      <Navbar />
      <Container>
        <Section>
          <main>
            <article>
              <header>
                <H1>{doc.frontmatter.title}</H1>
              </header>
              <div dangerouslySetInnerHTML={{ __html: doc.html }} />
            </article>
          </main>
          <aside>
            <nav>
              <ul
                style={{
                  display: `flex`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  margin: `50px 0 0 0`,
                  padding: 0
                }}
              >
                <li>
                  {previous && (
                    <Link to={`docs${previous.fields.slug}`} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={`docs${next.fields.slug}`} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav>
          </aside>
        </Section>
      </Container>
      <Footer />
    </Layout>
  )
}

const H1 = styled.h1`
  ${props => props.theme.fontSize.xlarge};
`

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

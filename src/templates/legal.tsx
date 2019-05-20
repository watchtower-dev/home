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

export default ({ data }: IProps) => {
  const doc = data.markdownRemark

  return (
    <Layout
      title={doc.frontmatter.title}
      description={doc.frontmatter.description || doc.excerpt}
      slug={doc.fields.slug}
    >
      <Navbar links={["Docs"]} />
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
  query LegalBySlug($slug: String!) {
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

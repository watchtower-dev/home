const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) =>
  graphql(`
    {
      docs: allMarkdownRemark(
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/.*content/docs.*/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      legal: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/.*content/legal.*/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) throw res.errors

    const docs = res.data.docs.edges
    docs.forEach((post, index) => {
      actions.createPage({
        path: `docs${post.node.fields.slug}`,
        component: path.resolve(`./src/templates/doc.tsx`),
        context: {
          slug: post.node.fields.slug,
          previous: index === docs.length - 1 ? null : docs[index + 1].node,
          next: index === 0 ? null : docs[index - 1].node
        }
      })
    })
    res.data.legal.edges.forEach((post, index) => {
      actions.createPage({
        path: `legal${post.node.fields.slug}`,
        component: path.resolve(`./src/templates/legal.tsx`),
        context: { slug: post.node.fields.slug }
      })
    })
    return null
  })

exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode })
    })
  }
}

exports.onCreatePage = async ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    createPage(page)
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: { rules: [{ test: /auth0-js/, use: loaders.null() }] }
    })
  }
}

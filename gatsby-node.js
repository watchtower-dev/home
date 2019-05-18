const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
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
    }
  `).then(result => {
    if (result.errors) throw result.errors

    const posts = result.data.allMarkdownRemark.edges
    posts.forEach((post, index) => {
      actions.createPage({
        path: post.node.fields.slug,
        component: path.resolve(`./src/templates/doc.tsx`),
        context: {
          slug: post.node.fields.slug,
          previous: index === posts.length - 1 ? null : posts[index + 1].node,
          next: index === 0 ? null : posts[index - 1].node
        }
      })
    })
    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    actions.createNodeField({
      name: `slug`,
      node,
      value: createFilePath({ node, getNode })
    })
  }
}

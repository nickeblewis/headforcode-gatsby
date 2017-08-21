// In your gatsby-node.js
const path = require('path')
  
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []
    const blogPost = path.resolve("src/templates/page.js")
    // Query for all markdown "nodes" and for the slug we previously created.
    resolve(
      graphql(
        `
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                frontmatter {
                  path
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path,
            },
          })
        })

        // return
      })
    )
  })
}

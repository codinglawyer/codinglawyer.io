const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
                template
                format
              }
            }
          }
        }
      `,
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const postTemplate = path.resolve(`./src/templates/post.js`)
        _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
            path: `posts/${edge.node.slug}`,
            component: slash(postTemplate),
            context: {
              id: edge.node.id,
            },
          })
        })
      })
      .then(() => {
        graphql(
          `
            {
              allWordpressTag {
                edges {
                  node {
                    id
                    slug
                    count
                    name
                  }
                }
              }
            }
          `,
        ).then(result => {
          if (result.errors) {
            reject(result.errors)
          }
          const tagTemplate = path.resolve(`./src/templates/tag.js`)
          _.each(result.data.allWordpressTag.edges, edge => {
            createPage({
              path: `tags/${edge.node.slug}`,
              component: slash(tagTemplate),
              context: {
                id: edge.node.id,
                name: edge.node.name,
              },
            })
          })
          resolve()
        })
      })
  })
}

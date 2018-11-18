// const _ = require(`lodash`)
// const Promise = require(`bluebird`)
// const path = require(`path`)
// const slash = require(`slash`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     graphql(
//       `
//         {
//           allWordpressPost {
//             edges {
//               node {
//                 id
//                 slug
//                 status
//                 template
//                 format
//               }
//             }
//           }
//         }
//       `,
//     )
//       .then(result => {
//         if (result.errors) {
//           reject(result.errors)
//         }
//         const postTemplate = path.resolve(`./src/templates/post.js`)
//         _.each(result.data.allWordpressPost.edges, edge => {
//           createPage({
//             path: `posts/${edge.node.slug}`,
//             component: slash(postTemplate),
//             context: {
//               id: edge.node.id,
//             },
//           })
//         })
//       })
//       .then(() => {
//         graphql(
//           `
//             {
//               allWordpressTag {
//                 edges {
//                   node {
//                     id
//                     slug
//                     count
//                     name
//                   }
//                 }
//               }
//             }
//           `,
//         ).then(result => {
//           if (result.errors) {
//             reject(result.errors)
//           }
//           const tagTemplate = path.resolve(`./src/templates/tag.js`)
//           _.each(result.data.allWordpressTag.edges, edge => {
//             createPage({
//               path: `tags/${edge.node.slug}`,
//               component: slash(tagTemplate),
//               context: {
//                 id: edge.node.id,
//                 name: edge.node.name,
//               },
//             })
//           })
//           resolve()
//         })
//       })
//   })
// }

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    console.log('RESULT', result)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogPostTemplate,
        context: {
          slug: node.frontmatter.slug,
        }, // additional data can be passed via context
      })
    })
  })
}

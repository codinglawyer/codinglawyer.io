const path = require(`path`)
const slash = require(`slash`)
const tags = require('./src/data/tags_node')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const tgs = tags.tags()

  const tagTemplate = path.resolve(`./src/templates/tag.js`)
  tgs.forEach(tag => {
    createPage({
      path: `tags/${tag.slug}`,
      component: slash(tagTemplate),
      context: {
        name: tag.name,
      },
    })
  })

  const postTemplate = path.resolve(`src/templates/post.js`)
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              seo_title
              slug
              description
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `posts/${node.frontmatter.slug}`,
        component: postTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}

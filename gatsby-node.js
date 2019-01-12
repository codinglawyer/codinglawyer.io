const path = require(`path`)
const slash = require(`slash`)

const sortTagsAlpha = tags => tags.sort((a, b) => a.name.localeCompare(b.name))

const getAllTags = allPosts =>
  allPosts.data.allMarkdownRemark.edges.reduce(
    (acc, val) => [
      ...acc,
      ...val.node.frontmatter.tags.map(tag => ({
        name: tag,
        count: 0,
      })),
    ],
    [],
  )

const removeDuplicates = tags =>
  tags.reduce((acc, val) => {
    const tagExists = acc.find(tag => tag.name === val.name)
    if (tagExists) {
      return acc.map(
        tag => (tag.name === val.name ? { ...tag, count: tag.count + 1 } : tag),
      )
    }
    return [...acc, { name: val.name, count: 1 }]
  }, [])

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

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
              thumbnail
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const allTags = sortTagsAlpha(removeDuplicates(getAllTags(result)))
    const posts = path.resolve(`./src/templates/posts.js`)
    createPage({
      path: '/posts',
      component: slash(posts),
      context: {
        allTags,
      },
    })

    const tagTemplate = path.resolve(`./src/templates/tag.js`)
    allTags.forEach(tag => {
      createPage({
        path: `tags/${tag.name}`,
        component: slash(tagTemplate),
        context: {
          name: tag.name,
        },
      })
    })

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const thumbnail = node.frontmatter.thumbnail[0]

      createPage({
        path: `posts/${node.frontmatter.slug}`,
        component: postTemplate,
        context: {
          slug: node.frontmatter.slug,
          thumbnailRegex: `/${thumbnail}/`,
        },
      })
    })
  })
}

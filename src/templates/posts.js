import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PostList from '../components/PostList'
import Layout from '../layouts'

const BlogIndex = ({ data, pageContext: { allTags } }) => (
  <Layout title="Posts">
    <PostList
      data={data}
      header="Posts"
      allTags={allTags}
      subHeader="Written thoughts."
      withTags
    />
  </Layout>
)

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            seo_title
            slug
            description
            tags
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
  pageContext: PropTypes.shape({
    allTags: PropTypes.array,
  }),
}

BlogIndex.defaultProps = {
  data: {},
  pageContext: { allTags: [] },
}

export default BlogIndex

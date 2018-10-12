import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PostList from '../components/PostList'
import Layout from '../layouts'

const BlogIndex = ({ data }) => (
  <Layout title="Posts">
    <PostList
      data={data}
      header="Posts"
      subHeader="Written thoughts."
      withTags
    />
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          ...PostIcons
        }
      }
    }
    allWordpressTag {
      edges {
        node {
          slug
          count
          name
        }
      }
    }
  }
`

BlogIndex.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.object,
    allWordpressTag: PropTypes.object,
  }),
}

BlogIndex.defaultProps = {
  data: {},
}

export default BlogIndex

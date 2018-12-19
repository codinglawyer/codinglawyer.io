import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PostList from '../components/PostList'
import Layout from '../layouts'

const TagTemplate = ({ data, pathContext }) => (
  <Layout title="Tags">
    <PostList data={data} header={`Tag: ${pathContext.name}`} />
  </Layout>
)

TagTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
  pathContext: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
}

TagTemplate.defaultProps = {
  data: {},
  pathContext: { id: '', name: '' },
}

export default TagTemplate

export const pageQuery = graphql`
  query($name: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $name } } }) {
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
        }
      }
    }
  }
`

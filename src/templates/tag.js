import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import PostList from '../components/PostList'

const TagTemplate = ({ data, pathContext }) => (
  <PostList
    data={data}
    header={`Tag: ${pathContext.name}`}
    headerSize={{ fontSize: '3.5rem' }}
  />
)

TagTemplate.propTypes = {
  data: PropTypes.shape({
    wordpressPost: PropTypes.object,
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
    allWordpressPost(filter: { tags: { name: { eq: $name } } }) {
      edges {
        node {
          title
          excerpt
          slug
          tags {
            name
          }
          ...PostIcons
        }
      }
    }
  }
`

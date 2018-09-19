import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ClockIcon from 'react-icons/lib/fa/clock-o'
import TagIcon from 'react-icons/lib/fa/tag'
// import OpenIcon from 'react-icons/lib/fa/folder-open'

import { rhythm } from '../utils/typography'

const PostIcons = ({
  node,
  displayTags = false,
  marginTopNegative = false,
  className = ``,
}) => (
  <div
    css={
      marginTopNegative
        ? { marginTop: rhythm(-1 / 2) }
        : { marginTop: rhythm(2) }
    }
    className={className}>
    <span style={{ marginRight: rhythm(1) }}>
      <ClockIcon size={14} style={{ position: `relative`, bottom: 1 }} />
      {` `}
      {node.date}
    </span>
    {/* {node.categories &&
      node.categories.map(category => (
        <span style={{ marginRight: rhythm(1) }} key={category.name}>
          <OpenIcon size={14} style={{ position: `relative`, bottom: 1 }} />
          {` `}
          {category.name}
        </span>
      ))} */}
    {node.tags &&
      displayTags &&
      node.tags.map(tag => (
        <span key={tag.name}>
          <TagIcon size={14} style={{ position: `relative`, bottom: 1 }} />
          {` `}
          {tag.name}
        </span>
      ))}
  </div>
)

export const query = graphql`
  fragment PostIcons on wordpress__POST {
    date(formatString: "MMMM DD, YYYY")
    tags {
      name
    }
    categories {
      name
    }
  }
`

PostIcons.propTypes = {
  node: PropTypes.object.isRequired,
  displayTags: PropTypes.bool,
  marginTopNegative: PropTypes.bool,
  className: PropTypes.string,
}

PostIcons.defaultProps = {
  displayTags: false,
  marginTopNegative: false,
  className: ``,
}

export default PostIcons

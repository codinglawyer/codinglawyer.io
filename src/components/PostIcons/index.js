import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ClockIcon from 'react-icons/lib/fa/clock-o'
import TagIcon from 'react-icons/lib/fa/tag'
import { PostIconsContainer, Tag } from '../Styled'
import { rhythm } from '../../utils/typography'

const PostIcons = ({ node, marginTopNegative = false, className = `` }) => (
  <PostIconsContainer
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
    <div>
      {node.tags &&
        node.tags.map(tag => (
          <Tag key={tag.name}>
            <TagIcon size={14} style={{ position: `relative`, bottom: 1 }} />
            {` `}
            {tag.name}
          </Tag>
        ))}
    </div>
  </PostIconsContainer>
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
  marginTopNegative: PropTypes.bool,
  className: PropTypes.string,
}

PostIcons.defaultProps = {
  marginTopNegative: false,
  className: ``,
}

export default PostIcons

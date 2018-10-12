import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import ClockIcon from 'react-icons/lib/fa/clock-o'
import TagIcon from 'react-icons/lib/fa/tag'
import { PostIconsContainer, LinkRed, Date } from '../Styled'
import { rhythm } from '../../utils/typography'

const PostIcons = ({ node, marginTopNegative = false, className = `` }) => (
  <PostIconsContainer
    css={
      marginTopNegative
        ? { marginTop: rhythm(-1 / 2) }
        : { marginTop: rhythm(2) }
    }
    className={className}>
    <Date style={{ marginRight: rhythm(1) }}>
      <ClockIcon size={14} style={{ position: `relative`, bottom: 1 }} />
      {` `}
      {node.date}
    </Date>
    <div>
      {node.tags &&
        node.tags.map(tag => (
          <span key={tag.name}>
            <Link
              to={`tags/${tag.slug}`}
              key={tag.slug}
              css={{
                marginRight: `15px`,
                fontSize: `0.7rem`,
              }}>
              <TagIcon size={14} style={{ position: `relative`, bottom: 1 }} />
              {` `}
              <LinkRed>
                <span>{tag.name}</span>
              </LinkRed>
            </Link>
          </span>
        ))}
    </div>
  </PostIconsContainer>
)

export const query = graphql`
  fragment PostIcons on wordpress__POST {
    date(formatString: "MMMM DD, YYYY")
    tags {
      slug
      count
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

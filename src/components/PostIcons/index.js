import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import { Link } from 'gatsby'
import ClockIcon from 'react-icons/lib/fa/clock-o'
import CalendarIcon from 'react-icons/lib/fa/calendar'
import TagIcon from 'react-icons/lib/fa/tag'
import { PostIconsContainer, LinkRed, Date } from '../Styled'
import { rhythm } from '../../utils/typography'

const PostIcons = ({
  node,
  readingTime,
  marginTopNegative = false,
  className = ``,
}) => (
  <PostIconsContainer
    css={
      marginTopNegative
        ? { marginTop: rhythm(-1 / 2) }
        : { marginTop: rhythm(2) }
    }
    className={className}>
    <Date style={{ marginRight: rhythm(1) }}>
      <CalendarIcon
        size={14}
        style={{
          position: `relative`,
          bottom: 1,
          marginRight: `3px`,
        }}
      />
      {` `}
      {format(node.date, 'MMMM DD, YYYY')}
      <ClockIcon
        size={14}
        style={{
          position: `relative`,
          bottom: 1,
          marginLeft: `20px`,
          marginRight: `3px`,
        }}
      />
      <span>{readingTime}</span>
    </Date>
    <div>
      {node.tags &&
        node.tags.map(tag => (
          <span key={tag}>
            <Link
              to={`tags/${tag}`}
              key={tag}
              css={{
                marginRight: `15px`,
                fontSize: `0.7rem`,
                display: `inline-block`,
              }}>
              <TagIcon size={14} />
              {` `}
              <LinkRed>
                <span>{tag}</span>
              </LinkRed>
            </Link>
          </span>
        ))}
    </div>
  </PostIconsContainer>
)

PostIcons.propTypes = {
  node: PropTypes.object.isRequired,
  readingTime: PropTypes.string,
  marginTopNegative: PropTypes.bool,
  className: PropTypes.string,
}

PostIcons.defaultProps = {
  readingTime: ``,
  marginTopNegative: false,
  className: ``,
}

export default PostIcons

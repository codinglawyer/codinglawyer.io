import PropTypes from 'prop-types'
import { format, parseISO } from 'date-fns'
import { Link } from 'gatsby'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import {FaRegCalendarAlt, FaRegClock, FaTag} from 'react-icons/fa'
import { PostIconsContainer, LinkRed, Date } from '../Styled'

const PostIcons = ({ node, readingTime, className }) => (
  <PostIconsContainer
    css={css`
      margin-top: -0.75rem;
      margin-bottom: 0.75rem;
    `}
    className={className}
  >
    <Date style={{ marginRight: `1.5rem` }}>
      <FaRegCalendarAlt
        size={14}
        style={{
          position: `relative`,
          bottom: 1,
          marginRight: `3px`,
        }}
      />
      {` `}
      {node.date && format(parseISO(node.date), 'MMMM dd, yyyy')}
      <FaRegClock
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
              css={css`
                margin-right: 15px;
                font-size: 0.7rem;
                display: inline-block;
              `}>
              <FaTag size={14} />
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
  className: PropTypes.string,
}

PostIcons.defaultProps = {
  readingTime: ``,
  className: ``,
}

export default PostIcons

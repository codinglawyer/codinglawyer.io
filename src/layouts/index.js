import React from 'react'
import PropTypes from 'prop-types'
import { Signature } from '../components/General'
import { rhythm } from '../utils/typography'

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
}

const containerStylePost = {
  maxWidth: 1000,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
}

const Layout = ({ isPost = false, children }) => (
  <div>
    {isPost ? (
      <div css={containerStylePost}>{children}</div>
    ) : (
      <div css={containerStyle}>{children}</div>
    )}
    <Signature>
      built with{' '}
      <span role="img" aria-label="Blue heart">
        💙
      </span>{' '}
      by David
    </Signature>
  </div>
)

Layout.propTypes = {
  isPost: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  isPost: false,
}

export default Layout

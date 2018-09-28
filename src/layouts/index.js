import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../components/Navigation'
import { rhythm } from '../utils/typography'
import { Signature } from './styles'
import '../assets/globalStyles'

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

const Layout = ({ isPost = false, isIndex = false, children }) => (
  <Navigation isIndex={isIndex}>
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
  </Navigation>
)

Layout.propTypes = {
  isPost: PropTypes.bool,
  isIndex: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  isPost: false,
  isIndex: false,
}

export default Layout

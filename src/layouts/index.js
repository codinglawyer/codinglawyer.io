import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navigation from '../components/Navigation'
import { rhythm } from '../utils/typography'
import { Signature } from './styles'
import '../styles/globalStyles'

const containerStyle = {
  maxWidth: 700,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
}

const containerStylePost = {
  maxWidth: 800,
  margin: `0 auto`,
  padding: rhythm(3 / 4),
}

const Layout = ({ title, isPost = false, isIndex = false, children }) => [
  <Helmet
    key="app-head"
    titleTemplate="%s · David Kopal"
    defaultTitle="David Kopal">
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content="Coding Lawyer's (David Kopal) homepage with a blog about programming focusing primarily on JavaScript and ReasonML"
    />
    <title>{title}</title>
  </Helmet>,
  <Navigation key="app-main" isIndex={isIndex}>
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
        by David in <span>{new Date().getFullYear()}</span>
      </Signature>
    </div>
  </Navigation>,
]

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

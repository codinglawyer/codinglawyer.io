import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import Navigation from '../components/Navigation'
import { Signature } from './styles'
import '../styles/globalStyles'

const containerStyle = css`
  max-width: 700px;
  margin: 0 auto;
  padding: 1.125rem;
`

const containerStylePost = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 1.125rem;
`

const Layout = ({ title, isPost = false, isIndex = false, children }) => [
  <Helmet
    key="app-head"
    titleTemplate="%s · David Kopal"
    defaultTitle="David Kopal">
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

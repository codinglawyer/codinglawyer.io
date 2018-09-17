import React from "react"
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"

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

export const Layout = ({ children }) => (
  <div>
    <div css={containerStyle}>{children}</div>
  </div>
)

export const PostLayout = ({ children }) => (
  <div>
    <div css={containerStylePost}>{children}</div>
  </div>
)

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'react-emotion'
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
} from 'react-share'

const SocialContainer = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;
`

const Message = styled.div`
  margin-bottom: 1rem;
  font-style: italic;
`

const ShareBar = ({ url, postTitle, isFooter = false }) => (
  <Fragment>
    {isFooter && (
      <Fragment>
        <hr />
        <Message>
          If you enjoyed this post, share it please. That way, more people will
          be able to read it. Thanks!
        </Message>
      </Fragment>
    )}
    <SocialContainer>
      <TwitterShareButton
        css={{ cursor: `pointer` }}
        url={url}
        title={postTitle}
        via="coding_lawyer">
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <FacebookShareButton
        css={{ cursor: `pointer` }}
        url={url}
        quote={postTitle}>
        <FacebookIcon size={40} />
      </FacebookShareButton>
      <GooglePlusShareButton css={{ cursor: `pointer` }} url={url}>
        <GooglePlusIcon size={40} />
      </GooglePlusShareButton>
      <LinkedinShareButton
        css={{ cursor: `pointer` }}
        url={url}
        title={postTitle}>
        <LinkedinIcon size={40} />
      </LinkedinShareButton>
    </SocialContainer>
  </Fragment>
)

ShareBar.propTypes = {
  url: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  isFooter: PropTypes.bool,
}

ShareBar.defaultProps = {
  isFooter: false,
}

export default ShareBar

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
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
import { Message, SocialContainer, ShareButtonStyles } from './styles'

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
        className={ShareButtonStyles}
        url={url}
        title={postTitle}
        via="coding_lawyer">
        <TwitterIcon size={40} />
      </TwitterShareButton>
      <FacebookShareButton
        className={ShareButtonStyles}
        url={url}
        quote={postTitle}>
        <FacebookIcon size={40} />
      </FacebookShareButton>
      <GooglePlusShareButton className={ShareButtonStyles} url={url}>
        <GooglePlusIcon size={40} />
      </GooglePlusShareButton>
      <LinkedinShareButton
        className={ShareButtonStyles}
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

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Description, Break, A, FooterImage } from '../General'

const AboutMe = ({ isFooter = false }) => (
  <Fragment>
    <Break />
    {isFooter && (
      <Fragment>
        <FooterImage />
        <Description>Hi, thanks for reading! I&apos;m David.</Description>
      </Fragment>
    )}{' '}
    <Description>I&apos;m a</Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/">
      <A>lawyer</A>
      <span role="img" aria-labelledby="book" />
    </a>{' '}
    <Description>
      turned software engineer living in Czech Republic.
    </Description>{' '}
    <Description>
      I&apos;m passionate about sharing my experiences with the community via my
    </Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/">
      <A>blog</A>
    </a>{' '}
    <Description>and as a </Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/">
      <A>speaker</A>
    </a>{' '}
    <Description>
      at conferences and meetups. If I&apos;m not spending time with my lovely
      girlfriend, I keep myself busy by organizing ReasonML
    </Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/">
      <A>meetups</A>
    </a>{' '}
    <Description>
      {' '}
      in Prague, swinging kettlebells, and cooking. I&apos;m a top-contributor
      to
    </Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/">
      <A>Free Code Camp</A>
    </a>
    {'. '}
    <Description>I make stuff at</Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/">
      <A>Blueberry</A>
    </a>
    <span role="img" aria-label="Sparkles">
      ✨
    </span>
    {'. '}
    <Break />
  </Fragment>
)

AboutMe.propTypes = {
  isFooter: PropTypes.bool,
}

AboutMe.defaultProps = {
  isFooter: false,
}

export default AboutMe

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
      turned software engineer living in Prague. I make stuff at
    </Description>{' '}
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
    <Description>
      I’m passionate about sharing my experiences with the community via my
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
      at conferences and meetups. If I’m not giving a talk or learning new
      technologies, I keep myself busy by organizing ReasonML
    </Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/">
      <A>meetups</A>
    </a>{' '}
    <Description> in Prague, swinging kettlebells, and cooking.</Description>
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

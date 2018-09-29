import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Description, Break, A } from '../General'
import { FooterImage } from './styles'

const AboutMe = ({ isFooter = false }) => (
  <div>
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
      href="/stopped-lawyer-became-developer-awesome-2">
      <A>lawyer</A>
      <span role="img" aria-labelledby="book" />
    </a>{' '}
    <Description>
      turned software engineer living in Czech Republic.
    </Description>{' '}
    <Description>
      I&apos;m passionate about sharing my experiences with the community via my
    </Description>{' '}
    <a target="_blank" rel="noopener noreferrer" href="/blog">
      <A>blog</A>
    </a>{' '}
    <Description>and as a </Description>{' '}
    <a target="_blank" rel="noopener noreferrer" href="/talks">
      <A>speaker</A>
    </a>{' '}
    <Description>
      at conferences and meetups. If I&apos;m not spending time with my lovely
      girlfriend, I keep myself busy by organizing ReasonML
    </Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.meetup.com/Reason-Prague">
      <A>meetups</A>
    </a>{' '}
    <Description>
      {' '}
      in Prague, swinging kettlebells, and cooking. I&apos;m a top contributor
      to
    </Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.freecodecamp.org/">
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
  </div>
)

AboutMe.propTypes = {
  isFooter: PropTypes.bool,
}

AboutMe.defaultProps = {
  isFooter: false,
}

export default AboutMe

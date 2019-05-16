import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Description, LinkRed } from '../Styled'
import { FooterImage, PictureContainer, Image } from './styles'

const About = ({ isFooter = false }) => (
  <div>
    {isFooter && (
      <Fragment>
        <hr />
        <FooterImage />
        <Description>Hi, thanks for reading! I&apos;m David.</Description>
      </Fragment>
    )}{' '}
    {!isFooter && (
      <PictureContainer>
        <Image
          css={{
            margin: '0 auto 40px auto',
            height: '140px',
            width: '140px',
          }}
        />
      </PictureContainer>
    )}
    <Description>I&apos;m a</Description>{' '}
    <Link to="/posts/i-stopped-being-a-lawyer">
      <LinkRed>lawyer</LinkRed>
      <span role="img" aria-labelledby="book" />
    </Link>{' '}
    <Description>
      turned software engineer living in the Czech Republic.
    </Description>{' '}
    <Description>I&apos;m an author of</Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://learnreasonml.com/">
      <LinkRed>learnReasonML.com</LinkRed>
    </a>{' '}
    <Description>
      video course. I&apos;m passionate about sharing my experiences with the
      community via my
    </Description>{' '}
    <Link to="/posts">
      <LinkRed>posts</LinkRed>
    </Link>{' '}
    <Description>and as a </Description>{' '}
    <Link to="/talks">
      <LinkRed>speaker</LinkRed>
    </Link>{' '}
    <Description>at conferences and meetups.</Description>
    <br />
    <br />
    <Description>I keep myself busy by organizing ReasonML</Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.meetup.com/Reason-Prague">
      <LinkRed>meetups</LinkRed>
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
      <LinkRed>Free Code Camp</LinkRed>
    </a>
    {'. '}
    <Description>I make stuff at</Description>{' '}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/">
      <LinkRed>Blueberry</LinkRed>
    </a>
    <span role="img" aria-label="Sparkles">
      ✨
    </span>
    {'. '}
  </div>
)

About.propTypes = {
  isFooter: PropTypes.bool,
}

About.defaultProps = {
  isFooter: false,
}

export default About

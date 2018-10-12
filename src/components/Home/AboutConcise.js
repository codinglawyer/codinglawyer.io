import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Item } from './styles'
import { LinkRed } from '../Styled'

const AboutConcise = () => (
  <Fragment>
    <Item>
      <span role="img" aria-labelledby="Shirt">
        👔
      </span>{' '}
      former{' '}
      <Link to="/posts/stopped-lawyer-became-developer-awesome-2">
        <LinkRed>lawyer</LinkRed>
      </Link>
    </Item>
    <Item>
      <span role="img" aria-labelledby="Laptop">
        💻
      </span>{' '}
      software{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.blueberry.io/">
        <LinkRed>engineer</LinkRed>
      </a>
    </Item>
    <Item>
      <span role="img" aria-labelledby="Head">
        🗣
      </span>{' '}
      <Link to="/talks">
        <LinkRed>speaker</LinkRed>
      </Link>
    </Item>
    <Item>
      <span role="img" aria-labelledby="Book">
        📖
      </span>{' '}
      <Link to="/posts">
        <LinkRed>blogger</LinkRed>
      </Link>
    </Item>
    <Item>
      <span role="img" aria-labelledby="Worker">
        👷
      </span>{' '}
      ReasonML meetup{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.meetup.com/Reason-Prague">
        <LinkRed>organizer</LinkRed>
      </a>{' '}
    </Item>
    <Item>
      <span role="img" aria-labelledby="Construction">
        🏗
      </span>{' '}
      FreeCodeCamp top{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.freecodecamp.org/">
        <LinkRed>contributor</LinkRed>
      </a>
    </Item>
  </Fragment>
)

export default AboutConcise

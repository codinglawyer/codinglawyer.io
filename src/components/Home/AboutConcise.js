import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Item } from './styles'
import { A } from '../General'

const AboutConcise = () => (
  <Fragment>
    <Item>
      <span role="img" aria-labelledby="Shirt">
        👔
      </span>{' '}
      former{' '}
      <Link to="/posts/stopped-lawyer-became-developer-awesome-2">
        <A>lawyer</A>
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
        <A>engineer</A>
      </a>
    </Item>
    <Item>
      <span role="img" aria-labelledby="Head">
        🗣
      </span>{' '}
      <Link to="/talks">
        <A>speaker</A>
      </Link>
    </Item>
    <Item>
      <span role="img" aria-labelledby="Book">
        📖
      </span>{' '}
      <Link to="/posts">
        <A>blogger</A>
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
        <A>organizer</A>
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
        <A>contributor</A>
      </a>
    </Item>
  </Fragment>
)

export default AboutConcise

import React, { Fragment } from 'react'
import { A } from '../General'

const AboutConcise = () => (
  <Fragment>
    <div>
      <span role="img" aria-labelledby="Shirt">
        👔
      </span>{' '}
      former{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/stopped-lawyer-became-developer-awesome-2">
        <A>lawyer</A>
      </a>
    </div>
    <div>
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
    </div>
    <div>
      <span role="img" aria-labelledby="Head">
        🗣
      </span>{' '}
      <a target="_blank" rel="noopener noreferrer" href="/talks">
        <A>speaker</A>
      </a>
    </div>
    <div>
      <span role="img" aria-labelledby="Book">
        📖
      </span>{' '}
      <a target="_blank" rel="noopener noreferrer" href="/blog">
        <A>blogger</A>
      </a>
    </div>
    <div>
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
    </div>
    <div>
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
    </div>
  </Fragment>
)

export default AboutConcise

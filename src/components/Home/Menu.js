import React from 'react'
import { Link } from 'gatsby'
import { LinkRed, Li, Ol } from '../Styled'

const Menu = () => (
  <div id="menu" className="slideout-menu" role="navigation">
    <div className="navigation">
      <Ol>
        <Li>
          <Link to="/posts">
            <LinkRed>Posts</LinkRed>
          </Link>
        </Li>
        <Li>
          <Link to="/talks">
            <LinkRed>Talks</LinkRed>
          </Link>
        </Li>
        <Li>
          <Link to="/about">
            <LinkRed>About me</LinkRed>
          </Link>
        </Li>
        <Li>
          <span>Get in touch with me via </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:kopaldvd@gmail.com">
            <LinkRed>Email</LinkRed>
          </a>
          {`, `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/coding_lawyer">
            <LinkRed>Twitter</LinkRed>
          </a>
          {`, `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/codinglawyer">
            <LinkRed>Github</LinkRed>
          </a>
          {`, `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@codinglawyer">
            <LinkRed>Medium</LinkRed>
          </a>
          {`, `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/david-kopal-54219199/">
            <LinkRed>LinkedIn</LinkRed>
          </a>
        </Li>
        <Li>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            <LinkRed>RSS feed</LinkRed>
          </a>
        </Li>
      </Ol>
    </div>
  </div>
)

export default Menu

import React from 'react'
import { Link } from 'gatsby'
import { A, Li, Ol } from '../General'

const Menu = () => (
  <div id="menu" className="slideout-menu" role="navigation">
    <div className="navigation">
      <Ol>
        <Li>
          <Link to="/posts">
            <A>Posts</A>
          </Link>
        </Li>
        <Li>
          <Link to="/talks">
            <A>Talks</A>
          </Link>
        </Li>
        <Li>
          <Link to="/about">
            <A>About me</A>
          </Link>
        </Li>
        <Li>
          <span>Get in touch with me via </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:kopaldvd@gmail.com">
            <A>Email</A>
          </a>
          {`, `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/coding_lawyer">
            <A>Twitter</A>
          </a>
          {`, `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/codinglawyer">
            <A>Github</A>
          </a>
          {`, `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@codinglawyer">
            <A>Medium</A>
          </a>
          {`, `}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/david-kopal-54219199/">
            <A>LinkedIn</A>
          </a>
        </Li>
      </Ol>
    </div>
  </div>
)

export default Menu

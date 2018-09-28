import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'
import { rhythm } from '../utils/typography'
import { A, Li, Ol, Break } from '../components/General'
import Profile from '../components/Home/Profile'
import '../assets/globalStyles'

const Home = () => (
  <Layout isIndex>
    <div
      css={{ marginBottom: rhythm(1), fontFamily: ['Cousine', 'monospace'] }}>
      <Profile />
      <div css={{ fontSize: '1.2rem' }}>
        <Break />
        <div>
          <span role="img" aria-labelledby="Shirt">
            👔
          </span>{' '}
          former lawyer
        </div>
        <div>
          <span role="img" aria-labelledby="Laptop">
            💻
          </span>{' '}
          software engineer
        </div>
        <div>
          <span role="img" aria-labelledby="Head">
            🗣
          </span>{' '}
          speaker
        </div>
        <div>
          <span role="img" aria-labelledby="Book">
            📖
          </span>{' '}
          blogger
        </div>
        <div>
          <span role="img" aria-labelledby="Worker">
            👷
          </span>{' '}
          ReasonML meetup organizer
        </div>
        <div>
          <span role="img" aria-labelledby="Construction">
            🏗
          </span>{' '}
          FreeCodeCamp top contributor
        </div>
        <Break />
        <div id="menu" className="slideout-menu" role="navigation">
          <div className="navigation">
            <Ol>
              <Li>
                <Link to="/blog">
                  <A>Blog</A>
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
      </div>
    </div>
  </Layout>
)

export default Home

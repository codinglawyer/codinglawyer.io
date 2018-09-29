import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'
import AboutConcise from '../components/Home/AboutConcise'
import { rhythm } from '../utils/typography'
import { A, Li, Ol, Break, Container } from '../components/General'
import Profile from '../components/Home/Profile'
import '../assets/globalStyles'

const Home = () => (
  <Layout isIndex>
    <div
      css={{
        marginBottom: rhythm(1),
        fontFamily: ['Cousine', 'monospace'],
      }}>
      <Profile />
      <Container>
        <Break />
        <AboutConcise />
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
      </Container>
    </div>
  </Layout>
)

export default Home

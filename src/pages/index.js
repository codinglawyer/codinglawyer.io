import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { Box, Flex } from '../components/Layout'
import { Layout } from '../layouts'
import PostIcons from '../components/PostIcons'
import { rhythm } from '../utils/typography'
import { Image, A, ListItem, Ol } from '../components/General'
import AboutMe from '../components/Home/aboutMe'
import Profile from '../components/Home/Profile'
import '../assets/globalStyles'

class Home extends Component {
  render() {
    const data = this.props.data
    return (
      <Layout>
        <div css={{ marginBottom: rhythm(1) }}>
          <Profile />
          <AboutMe />
          <div id="menu" className="slideout-menu" role="navigation">
            <div className="navigation">
              <Ol>
                <ListItem>
                  <Link to="/blog">
                    <A>Blog</A>
                    <span role="img" aria-labelledby="book" />
                  </Link>
                  {` 📖`}
                </ListItem>
                <ListItem>
                  <Link to="/talks">
                    <A>Talks</A>
                    <span role="img" aria-labelledby="speaking" />
                  </Link>
                  {` 🗣`}
                </ListItem>
                <ListItem>
                  <span>Get in touch with me via </span>
                  <span role="img" aria-labelledby="speaking">
                    {` 📬 `}
                  </span>
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
                </ListItem>
              </Ol>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home

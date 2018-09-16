import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { Box, Flex } from "../components/Layout"
import Layout from "../layouts"
import PostIcons from "../components/PostIcons"
import { rhythm } from "../utils/typography"
import {
  Title,
  Subtitle,
  Name,
  Col1,
  Col2,
  Image,
  Break,
  Description,
  A,
  ListItem,
  Ol,
} from "../components/Home"

const messages = {
  title: "David Kopal",
  aka: "A.K.A.",
  subtitle: "Coding lawyer",
  invitation: "Hi, welcome to my blog!",
  desc1: "Lawyer turned software engineer living in Prague. I make stuff at",
  desc2:
    "I’m passionate about sharing my experiences with the community via my blog and as a speaker at conferences and meetups. If I’m not giving a talk or learning new technologies, I keep myself busy by organizing ReasonML meetups in Prague, swinging kettlebells, and cooking.",
}

class Home extends Component {
  render() {
    const data = this.props.data
    return (
      <Layout>
        <div css={{ marginBottom: rhythm(1) }}>
          <Flex>
            <Col1>
              <Title>{messages.title}</Title>
              <Subtitle>{messages.aka}</Subtitle>
              <Name>{messages.subtitle}</Name>
              <Subtitle>{messages.invitation}</Subtitle>
            </Col1>
            <Col2>
              <Image />
            </Col2>
          </Flex>
          <Break />
          <Description>{messages.desc1}</Description>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.blueberry.io/"
          >
            {" "}
            <A>Blueberry</A>
            <span role="img" aria-labelledby="book">
              {"✨. "}
            </span>
          </a>
          <Description>{messages.desc2}</Description>
          <Break />
          <div id="menu" className="slideout-menu" role="navigation">
            <div className="navigation">
              <Ol>
                <ListItem>
                  <Link to="/blog">
                    <A>Blog</A>
                    <span role="img" aria-labelledby="book">
                      {` 📖`}
                    </span>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to="/blog">
                    <A>Talks</A>
                    <span role="img" aria-labelledby="speaking">
                      {` 🗣`}
                    </span>
                  </Link>
                </ListItem>
                <ListItem>
                  <span>Get in touch with me via </span>
                  <span role="img" aria-labelledby="speaking">
                    {` 📬 `}
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:kopaldvd@gmail.com"
                  >
                    <A>Email</A>
                  </a>
                  {`, `}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/coding_lawyer"
                  >
                    <A>Twitter</A>
                  </a>
                  {`, `}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/codinglawyer"
                  >
                    <A>Github</A>
                  </a>
                  {`, `}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@codinglawyer"
                  >
                    <A>Medium</A>
                  </a>
                  {`, `}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/david-kopal-54219199/"
                  >
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


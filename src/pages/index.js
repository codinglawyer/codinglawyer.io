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
import { injectGlobal } from "emotion"

injectGlobal`
  a {
    text-decoration: none;
  }
`


class Home extends Component {
  render() {
    const data = this.props.data
    return (
      <Layout>
        <div css={{ marginBottom: rhythm(1) }}>
          <Flex>
            <Col1>
              <Title>David Kopal</Title>
              <Subtitle>A.K.A.</Subtitle>
              <Name>Coding lawyer</Name>
              <Subtitle>Hi, welcome to my blog!</Subtitle>
            </Col1>
            <Col2>
              <Image />
            </Col2>
          </Flex>
          <Break />
          <Description>
            Lawyer turned software engineer living in Prague. I make stuff at
          </Description>
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
          <Description>
            I’m passionate about sharing my experiences with the community via
            my
          </Description>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.blueberry.io/"
          >
            {" "}
            <A>blog</A>
            <span role="img" aria-labelledby="book">
              {" "}
            </span>
          </a>
          <Description>and as a </Description>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.blueberry.io/"
          >
            {" "}
            <A>speaker</A>
            <span role="img" aria-labelledby="book">
              {" "}
            </span>
          </a>
          <Description>
            at conferences and meetups. If I’m not giving a talk or learning new
            technologies, I keep myself busy by organizing ReasonML
          </Description>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.blueberry.io/"
          >
            {" "}
            <A>meetups</A>
            <span role="img" aria-labelledby="book">
              {" "}
            </span>
          </a>
          <Description>
            {" "}
            in Prague, swinging kettlebells, and cooking
          </Description>

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

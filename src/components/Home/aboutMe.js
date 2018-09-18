import React, { Fragment } from "react"
import { Flex } from "../Layout"
import { Image, Description, Break, A, FooterImage } from "../General"

const AboutMe = ({ isFooter }) => (
  <Fragment>
    <Break />
    {isFooter && (
      <Fragment>
        <FooterImage />
        <Description>Hi, thanks for reading! I'm David.</Description>
      </Fragment>
    )}{" "}
    <Description>I'm a</Description>{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/"
    >
      <A>lawyer</A>
      <span role="img" aria-labelledby="book" />
    </a>{" "}
    <Description>
      turned software engineer living in Prague. I make stuff at
    </Description>{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/"
    >
      <A>Blueberry</A>
      <span role="img" aria-labelledby="book" />
    </a>
    {"✨. "}
    <Description>
      I’m passionate about sharing my experiences with the community via my
    </Description>{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/"
    >
      <A>blog</A>
    </a>{" "}
    <Description>and as a </Description>{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/"
    >
      <A>speaker</A>
    </a>{" "}
    <Description>
      at conferences and meetups. If I’m not giving a talk or learning new
      technologies, I keep myself busy by organizing ReasonML
    </Description>{" "}
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.blueberry.io/"
    >
      <A>meetups</A>
    </a>{" "}
    <Description> in Prague, swinging kettlebells, and cooking.</Description>
    <Break />
  </Fragment>
)

export default AboutMe

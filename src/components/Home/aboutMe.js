import React, { Fragment } from "react"
import { Flex } from "../Layout"
import {
  Title,
  Subtitle,
  Name,
  Col1,
  Col2,
  Image,
  Description,
  Break,
  A,
} from "../General"

const AboutMe = () => (
  <Fragment>
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

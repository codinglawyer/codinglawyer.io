import React, { Fragment } from 'react'
import { Flex } from '../Layout'
import { Title, Subtitle, Name, Col1, Col2, Image } from '../General'

const Profile = () => (
  <Fragment>
    <Flex>
      <Col1>
        <Title>David Kopal</Title>
        <Subtitle>A.K.A.</Subtitle>
        <Name>coding lawyer</Name>
        <Subtitle>Hi👋, welcome to my site!</Subtitle>
      </Col1>
      <Col2>
        <Image />
      </Col2>
    </Flex>
  </Fragment>
)

export default Profile

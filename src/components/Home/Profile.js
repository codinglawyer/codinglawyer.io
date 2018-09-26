import React, { Fragment } from 'react'
import { Flex } from '../Layout'
import { Title, Subtitle, Name, Col1, Col2, Image } from './styles'

const Profile = () => (
  <Fragment>
    <Flex>
      <Col2>
        <Image />
      </Col2>
      <Col1>
        <Title>David Kopal</Title>
        <Name>coding lawyer</Name>
        <Subtitle>
          Hi
          <span role="img" aria-label="Wave">
            👋
          </span>
          , welcome to my site!
        </Subtitle>
      </Col1>
    </Flex>
  </Fragment>
)

export default Profile

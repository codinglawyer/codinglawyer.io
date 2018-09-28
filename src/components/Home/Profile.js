import React, { Fragment } from 'react'
import { Flex } from '../Layout'
import {
  Title,
  Subtitle,
  Name,
  TextContainer,
  PictureContainer,
  Image,
} from './styles'

const Profile = () => (
  <Fragment>
    <Flex>
      <TextContainer>
        <Title>David Kopal</Title>
        <Name>[coding lawyer]</Name>
        <Subtitle>
          Hi
          <span role="img" aria-label="Wave">
            👋
          </span>
          , welcome to my site!
        </Subtitle>
      </TextContainer>
      <PictureContainer>
        <Image />
      </PictureContainer>
    </Flex>
  </Fragment>
)

export default Profile

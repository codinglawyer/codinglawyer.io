import React, { Fragment } from 'react'
import { Flex } from '../Layout'
import {
  Title,
  Description,
  Subtitle,
  TextContainer,
  PictureContainer,
  Image,
} from './styles'

const Profile = () => (
  <Fragment>
    <Flex>
      <TextContainer>
        <Title>David Kopal</Title>
        <Subtitle>[coding lawyer]</Subtitle>
        <Description>
          Hi
          <span role="img" aria-label="Wave">
            👋
          </span>
          , welcome to my site!
        </Description>
      </TextContainer>
      <PictureContainer>
        <Image />
      </PictureContainer>
    </Flex>
  </Fragment>
)

export default Profile

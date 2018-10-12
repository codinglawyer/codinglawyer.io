import React, { Fragment } from 'react'
import Layout from '../layouts'
import talks from '../data/talks'
import {
  Header,
  SubHeader,
  Break,
  StyledBtn,
  Container,
  Message,
  MessageContainer,
  LinkBlue,
  TalksList,
  StyledBreak,
  TalkTitle,
} from '../components/Styled'

const Talks = () => (
  <Layout title="Talks" isPost>
    <Container>
      <Header>Talks</Header>
      <SubHeader>Spoken thoughts.</SubHeader>
      <Break />
      <MessageContainer>
        <Message>Interested in having me to speak at your event?</Message>
        <StyledBtn href="mailto:kopaldvd@gmail.com">Invite me</StyledBtn>
      </MessageContainer>
      {talks.map(talk => (
        <Fragment key={talk.id}>
          <StyledBreak />
          <TalksList>
            <TalkTitle>
              <a
                className="link"
                href={talk.eventLink}
                target="_blank"
                rel="noopener noreferrer">
                <strong>{talk.eventName}</strong>
              </a>
              <span /> <span>{`(${talk.type})`}</span>
            </TalkTitle>
            <li>
              <span>{talk.eventDate}</span>
              {', '}
              <span>{talk.eventLocation}</span>
            </li>
            {talk.title && (
              <li>
                <strong>Title:</strong> <span>{talk.title}</span>
              </li>
            )}
            {talk.duration && (
              <li>
                <strong>Duration:</strong>{' '}
                <span>{`${talk.duration} minutes`}</span>
              </li>
            )}
            <li>
              {talk.videoLink && (
                <LinkBlue
                  href={talk.videoLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Video
                </LinkBlue>
              )}
              {talk.slidesLink && (
                <LinkBlue
                  href={talk.slidesLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Slides
                </LinkBlue>
              )}
              {talk.codeLink && (
                <LinkBlue
                  href={talk.codeLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Code
                </LinkBlue>
              )}
            </li>
          </TalksList>
        </Fragment>
      ))}
    </Container>
  </Layout>
)

export default Talks

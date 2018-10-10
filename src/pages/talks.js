import React, { Fragment } from 'react'
import { css } from 'emotion'
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
  StyledLink,
  TalksList,
  StyledBreak,
} from '../components/General'

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
            <li
              className={css`
                font-size: 0.9rem;
                @media (min-width: 768px) {
                  font-size: 1.1rem;
                }
              `}>
              <a
                className="link"
                href={talk.eventLink}
                target="_blank"
                rel="noopener noreferrer">
                <strong>{talk.eventName}</strong>
              </a>
              <span /> <span>{`(${talk.type})`}</span>
            </li>
            <li>
              <span>{talk.eventDate}</span>
              {', '}
              <span>{talk.eventLocation}</span>
            </li>
            {talk.title && (
              <li>
                <strong>Title:</strong> <span />
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
                <StyledLink
                  href={talk.videoLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Video
                </StyledLink>
              )}
              {talk.slidesLink && (
                <StyledLink
                  href={talk.slidesLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Slides
                </StyledLink>
              )}
              {talk.codeLink && (
                <StyledLink
                  href={talk.codeLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Code
                </StyledLink>
              )}
            </li>
          </TalksList>
        </Fragment>
      ))}
    </Container>
  </Layout>
)

export default Talks

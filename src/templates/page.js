import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import {
  Header,
  SubHeader,
  Break,
  StyledBtn,
  Container,
} from '../components/General'
import { rhythm } from '../utils/typography'

const talks = [
  {
    eventName: "Free Code Camp top contributors' party ",
    eventLink: 'https://www.freecodecamp.org/',
    eventDate: '22. 9. 2018',
    eventLocation: 'Dublin, Ireland',
    title: '',
    type: 'interview',
    duration: '',
    codeLink: '',
    slidesLink: '',
    videoLink:
      'https://www.youtube.com/watch?v=8TYo9YYfKpc&feature=youtu.be&t=1h46m18s',
  },
  {
    eventName: 'PragueJS meetup',
    eventLink: 'https://www.meetup.com/praguejs/events/254177391/',
    eventDate: '11. 9. 2018',
    eventLocation: 'Prague, Czech Republic',
    title: 'Use ReasonML in your React applications',
    type: 'talk',
    duration: 30,
    codeLink: 'https://github.com/codinglawyer/reason-tic-tac-toe',
    slidesLink:
      'https://speakerdeck.com/codinglawyer/use-reason-in-your-react-applications',
    videoLink: '',
  },
  {
    eventName: 'GrillJS',
    eventLink: 'http://grilljs.com/',
    eventDate: '18. - 19. 8. 2018',
    eventLocation: '18. - 19. 8. 2018',
    title: 'Use ReasonML in your React applications',
    type: 'talk',
    duration: 40,
    codeLink: 'https://github.com/codinglawyer/reason-tic-tac-toe',
    slidesLink:
      'https://speakerdeck.com/codinglawyer/use-reason-in-your-react-applications',
    videoLink: '',
  },
  {
    eventName: 'Lighting Cup Prague by ReactiveConf ',
    eventLink: 'https://reactiveconf.com/',
    eventDate: '16. 8. 2018',
    eventLocation: 'Prague, Czech Republic',
    title: 'Write better React',
    type: 'lightning talk',
    duration: 10,
    codeLink: '',
    slidesLink: '',
    videoLink: '',
  },
  {
    eventName: 'OdessaJs',
    eventLink: 'http://odessajs.org/',
    eventDate: '7. - 8. 7. 2018',
    eventLocation: 'Odessa, Ukraine',
    title: 'Unleash the power of the higher-order components',
    type: 'talk',
    duration: 40,
    codeLink: 'https://github.com/codinglawyer/hocs-code',
    slidesLink:
      'https://speakerdeck.com/codinglawyer/unleash-the-power-of-the-higher-order-components',
    videoLink: 'https://www.youtube.com/watch?reload=9&v=P-3Oxb0nA5A',
  },
  {
    eventName: 'enterJs',
    eventLink: 'https://www.enterjs.de/',
    eventDate: '20. - 21. 6. 2018',
    eventLocation: 'Darmstadt, Germany',
    title: 'Unleash the power of the higher-order components',
    type: 'talk',
    duration: 40,
    codeLink: 'https://github.com/codinglawyer/hocs-code',
    slidesLink:
      'https://speakerdeck.com/codinglawyer/unleash-the-power-of-the-higher-order-components',
    videoLink: '',
  },
  {
    eventName: 'Front-Trends 2018',
    eventLink: 'https://2018.front-trends.com/',
    eventDate: '24. - 25. 5. 2018',
    eventLocation: 'Warsaw, Poland',
    title: 'Unleash the power of the higher-order components',
    type: 'talk',
    duration: 30,
    codeLink: 'https://github.com/codinglawyer/hocs-code',
    slidesLink:
      'https://speakerdeck.com/codinglawyer/unleash-the-power-of-the-higher-order-components',
    videoLink: '',
  },
  {
    eventName: 'Functional programming in React',
    eventLink: 'https://2018.front-trends.com/',
    eventDate: '7.3. 2018',
    eventLocation: 'Prague, Czech Republic',
    title: 'Functional programming in React',
    type: 'workshop',
    duration: 90,
    codeLink: '',
    slidesLink: '',
    videoLink: '',
  },
  {
    eventName: 'iJS',
    eventLink: 'https://javascript-conference.com/',
    eventDate: '23. - 27. 10. 2017',
    eventLocation: 'Munich, Germany',
    title: 'Writing React Components - The Functional Way',
    type: 'talk',
    duration: 60,
    codeLink: 'https://github.com/codinglawyer/hocs-code',
    slidesLink: '',
    videoLink: 'https://www.youtube.com/watch?v=jAsU-FejzIE',
  },
]

const PageTemplate = ({ data: { wordpressPage } }) => (
  <Layout isPost>
    <Header>Talks</Header>
    <SubHeader css={{ marginBottom: rhythm(1 / 2) }}>
      Spoken thoughts.
    </SubHeader>
    <Break />
    <div css={{ textAlign: `center` }}>
      <Container css={{ marginBottom: `1.5rem` }}>
        Interested in having me to speak at your event?
      </Container>
      <StyledBtn href="mailto:kopaldvd@gmail.com">Invite me</StyledBtn>
    </div>
    <div css={{ marginBottom: `3rem` }} />
    {/* <h1 dangerouslySetInnerHTML={{ __html: wordpressPage.title }} /> */}
    <div dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
  </Layout>
)

PageTemplate.propTypes = {
  data: PropTypes.shape({
    wordpressPage: PropTypes.object,
  }),
}

PageTemplate.defaultProps = {
  data: {},
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

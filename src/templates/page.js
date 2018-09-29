import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layouts'
import { Header, SubHeader, Break, StyledBtn } from '../components/General'
import { rhythm } from '../utils/typography'

const PageTemplate = ({ data: { wordpressPage } }) => (
  <Layout isPost>
    <Header>Talks</Header>
    <SubHeader css={{ marginBottom: rhythm(1 / 2) }}>
      Spoken thoughts.
    </SubHeader>
    <Break />
    <div css={{ textAlign: `center` }}>
      <div css={{ marginBottom: `1.5rem`, fontSize: `1.3rem` }}>
        Interested in having me to speak at your event?
      </div>
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

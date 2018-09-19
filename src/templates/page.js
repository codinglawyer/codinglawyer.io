import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { PostLayout } from '../layouts'
import { Header, SubHeader } from '../components/General'
import { rhythm } from '../utils/typography'

const PageTemplate = ({ data: { wordpressPage } }) => (
  <PostLayout>
    <Header>Talks</Header>
    <SubHeader css={{ marginBottom: rhythm(1 / 2) }}>
      Spoken thoughts.
    </SubHeader>
    {/* <h1 dangerouslySetInnerHTML={{ __html: wordpressPage.title }} /> */}
    <div dangerouslySetInnerHTML={{ __html: wordpressPage.content }} />
  </PostLayout>
)

PageTemplate.propTypes = {
  data: { wordpressPage: PropTypes.object },
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

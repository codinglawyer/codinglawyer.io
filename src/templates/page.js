import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PostIcons from '../components/PostIcons'
import { PostLayout } from '../layouts'
import { Header, SubHeader } from '../components/General'
import { rhythm } from '../utils/typography'

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage
    return (
      <PostLayout>
        <Header>Talks</Header>
        <SubHeader css={{ marginBottom: rhythm(1 / 2) }}>
          Spoken thoughts.
        </SubHeader>
        {/* <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} /> */}
        <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
      </PostLayout>
    )
  }
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

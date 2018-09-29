import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import { Footer, HeaderPost, Container } from '../components/General'
import AboutMe from '../components/Home/aboutMe'
import PostIcons from '../components/PostIcons'
import Layout from '../layouts'

const PostTemplate = ({ data: { wordpressPost } }) => (
  <Layout isPost>
    <Container>
      <PostIcons node={wordpressPost} css={{ marginBottom: rhythm(1 / 2) }} />
      <HeaderPost dangerouslySetInnerHTML={{ __html: wordpressPost.title }} />
      <div dangerouslySetInnerHTML={{ __html: wordpressPost.content }} />
      {/* IMAGE OPTIMIZATION {wordpressPost.acf &&
          wordpressPost.acf.page_builder_post &&
          wordpressPost.acf.page_builder_post.map((layout, i) => {
            if (layout.__typename === `WordPressAcf_image_gallery`) {
              return (
                <div key={`${i} image-gallery`}>
                  <h2>ACF Image Gallery</h2>
                  {layout.pictures.map(({ picture }) => {
                    const img = picture.localFile.childImageSharp.fluid
                    return (
                      <Img
                        css={{ marginBottom: rhythm(1) }}
                        key={img.src}
                        fluid={img}
                      />
                    )
                  })}
                </div>
              )
            }
            if (layout.__typename === `WordPressAcf_post_photo`) {
              const img = layout.photo.localFile.childImageSharp.fluid
              return (
                <div key={`${i}-photo`}>
                  <h2>ACF Post Photo</h2>
                  <Img
                    css={{ marginBottom: rhythm(1) }}
                    src={img.src}
                    fluid={img}
                  />
                </div>
              )
            }
            return null
          })} */}
      <Footer>
        <AboutMe isFooter />
      </Footer>
    </Container>
  </Layout>
)

PostTemplate.propTypes = {
  data: PropTypes.shape({
    wordpressPost: PropTypes.object,
  }),
}

PostTemplate.defaultProps = {
  data: {},
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      ...PostIcons
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`

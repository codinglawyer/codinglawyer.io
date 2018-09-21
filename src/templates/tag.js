import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { rhythm } from '../utils/typography'
import { Footer, HeaderPost, Header, SubHeader } from '../components/General'
import AboutMe from '../components/Home/aboutMe'
import PostIcons from '../components/PostIcons'
import { PostLayout } from '../layouts'

const TagTemplate = ({ data, pathContext }) => {
  console.log('DATA', data)
  return (
    <PostLayout>
      <Header>{`Tag: ${pathContext.name}`}</Header>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div css={{ marginBottom: rhythm(2.5) }} key={node.slug}>
          <Link to={node.slug} css={{ textDecoration: `none` }}>
            <h3>{node.title}</h3>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <PostIcons node={node} concise marginTopNegative />
        </div>
      ))}
      {/* <PostIcons node={wordpressPost} css={{ marginBottom: rhythm(1 / 2) }} />
    <HeaderPost dangerouslySetInnerHTML={{ __html: wordpressPost.title }} />
    <div dangerouslySetInnerHTML={{ __html: wordpressPost.content }} /> */}
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
    </PostLayout>
  )
}

TagTemplate.propTypes = {
  data: { wordpressPost: PropTypes.object },
  pathContext: { id: PropTypes.string, name: PropTypes.string },
}

TagTemplate.defaultProps = {
  data: {},
  pathContext: { id: '', name: '' },
}

export default TagTemplate

// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressTag(id: { eq: $id }) {
//       slug
//       name
//     }
//   }
// `

// query($name: String!) {
// allWordpressPost(filter: { tags: { name: { eq: $name } } }) {

export const pageQuery = graphql`
  query($name: String!) {
    allWordpressPost(filter: { tags: { name: { eq: $name } } }) {
      edges {
        node {
          title
          excerpt
          slug
          tags {
            name
          }
          ...PostIcons
        }
      }
    }
  }
`

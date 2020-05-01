import PropTypes from 'prop-types'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { graphql } from 'gatsby'
import { Footer, HeaderPost, Container } from '../components/Styled'
import PostIcons from '../components/PostIcons'
import Layout from '../layouts'
import ShareBar from '../components/ShareBar'
import About from '../components/Home/About'
import SEO from '../components/SEO'

const PostTemplate = ({
  data: { markdownRemark, imageSharp },
  location: { href },
}) => {
  const { frontmatter, html, fields } = markdownRemark
  const postImage = imageSharp && imageSharp.sizes && imageSharp.sizes.src

  return [
    <SEO
      key={`seo-${frontmatter.slug}`}
      postImage={postImage}
      postData={markdownRemark}
      isBlogPost
    />,
    <Layout key={`layout-${frontmatter.slug}`} title={frontmatter.title} isPost>
      <Container>
        <HeaderPost dangerouslySetInnerHTML={{ __html: frontmatter.title }} />
        <PostIcons
          node={frontmatter}
          readingTime={fields && fields.readingTime.text}
          css={css`
            margin-bottom: 1.5rem;
          `}
        />
        <hr />
        <ShareBar url={href} postTitle={frontmatter.title} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <ShareBar url={href} postTitle={frontmatter.title} isFooter />
        <Footer>
          <About isFooter />
        </Footer>
      </Container>
    </Layout>,
  ]
}

PostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    imageSharp: PropTypes.object,
  }),
  location: PropTypes.shape({
    href: PropTypes.string,
  }),
}

PostTemplate.defaultProps = {
  data: {},
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!, $thumbnailRegex: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        seo_title
        slug
        description
        tags
        thumbnail
      }
      fields {
        readingTime {
          text
        }
      }
    }
    imageSharp(original: { src: { regex: $thumbnailRegex } }) {
      sizes {
        src
      }
    }
  }
`

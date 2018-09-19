/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import { Header, SubHeader, Break, A } from "../components/General"
import { ClockIcon } from "react-icons/lib/fa"
// import { Link, Timestamp } from '../../components/Misc';
import { Box } from "../components/Layout"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import PostIcons from "../components/PostIcons"

const BlogIndex = ({ data: { allWordpressTag, allWordpressPost } }) => (
  <Box>
    <Box
      width={[1, 1, 720]}
      m={["3.5rem 0 0 0", "3.5rem 0 0 0", "3.5rem auto 0 auto"]}
      px={[3, 3, 0]}
    >
      <Header>Blog</Header>
      <SubHeader>Written thoughts.</SubHeader>
      {/* MARKDOWN <Box>
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }, index) => {
              return (
                <Box key={post.id}>
                  <Link to={post.fields.slug} className={linkStyles}>
                    <Timestamp>{post.frontmatter.date}</Timestamp>
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.excerpt}</p>
                  </Link>
                </Box>
              );
            })}
        </Box> */}
      <Break />
      <div css={{ marginBottom: `3rem` }}>
        {allWordpressTag.edges.map(({ node }) => (
          <Link to={node.slug}>
            <A
              css={{
                marginRight: `15px`,
                fontSize: `14px`,
              }}
            >
              <span>{node.name}</span> <span>{node.count}</span>
            </A>
          </Link>
        ))}
      </div>
      {allWordpressPost.edges.map(({ node }) => (
        <div css={{ marginBottom: rhythm(2.5) }} key={node.slug}>
          <Link to={node.slug} css={{ textDecoration: `none` }}>
            <h3>{node.title}</h3>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          <PostIcons node={node} concise marginTopNegative />
        </div>
      ))}
    </Box>
  </Box>
)

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
          ...PostIcons
        }
      }
    }
    allWordpressTag {
      edges {
        node {
          id
          slug
          count
          name
          link
        }
      }
    }
  }
`

export default BlogIndex

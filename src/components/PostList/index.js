import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Header, SubHeader, Break, A, Tags } from '../General'
import { rhythm } from '../../utils/typography'
import PostIcons from '../PostIcons'
import Layout from '../../layouts'

const PostList = ({
  data,
  header,
  headerSize = {},
  subHeader = '',
  withTags = false,
}) => (
  <Layout>
    <Header css={headerSize}>{header}</Header>
    <SubHeader>{subHeader}</SubHeader>
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
    <Tags>
      {withTags && (
        <Fragment>
          {data.allWordpressTag.edges.map(({ node }) => (
            <Link to={node.slug} key={node.slug}>
              <A
                css={{
                  marginRight: `15px`,
                  fontSize: `14px`,
                }}>
                <span>{node.name}</span> <span>{node.count}</span>
              </A>
            </Link>
          ))}
        </Fragment>
      )}
    </Tags>
    {data.allWordpressPost.edges.map(({ node }) => (
      <div css={{ marginBottom: rhythm(2.5) }} key={node.slug}>
        <Link to={node.slug} css={{ textDecoration: `none` }}>
          <h3>{node.title}</h3>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        <PostIcons node={node} concise marginTopNegative />
      </div>
    ))}
  </Layout>
)

PostList.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.object,
    allWordpressTag: PropTypes.object,
  }),
  header: PropTypes.string,
  subHeader: PropTypes.string,
  headerSize: PropTypes.object,
  withTags: PropTypes.bool,
}

PostList.defaultProps = {
  data: {},
  header: '',
  subHeader: '',
  headerSize: {},
  withTags: false,
}

export default PostList

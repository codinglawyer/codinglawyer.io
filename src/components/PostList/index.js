import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import {
  Header,
  SubHeader,
  Break,
  LinkRed,
  Tags,
  PostSnippet,
  Container,
  PostSnippetTitle,
  PostSnippetDescription,
  TagHeader,
} from '../Styled'
import PostIcons from '../PostIcons'

const PostList = ({
  data,
  header,
  subHeader = '',
  withTags = false,
  allTags,
}) => (
  <Container>
    {!withTags ? <TagHeader>{header}</TagHeader> : <Header>{header}</Header>}
    <SubHeader>{subHeader}</SubHeader>
    <Break />
    <Tags>
      {withTags && (
        <Fragment>
          {allTags.map(tag => (
            <Link
              to={`tags/${tag.name}`}
              key={tag.name}
              css={{
                marginRight: `15px`,
                fontSize: `0.7rem`,
              }}>
              <LinkRed>
                <span
                  css={{
                    whiteSpace: `nowrap`,
                  }}>
                  {`${tag.name} (${tag.count})`}
                </span>
                <span />
              </LinkRed>
            </Link>
          ))}
        </Fragment>
      )}
    </Tags>
    {data.allMarkdownRemark &&
      data.allMarkdownRemark.edges.map(({ node }) => (
        <PostSnippet key={node.frontmatter.slug}>
          <Link to={`posts/${node.frontmatter.slug}`}>
            <PostSnippetTitle
              dangerouslySetInnerHTML={{ __html: node.frontmatter.title }}
            />
          </Link>
          <PostSnippetDescription
            dangerouslySetInnerHTML={{ __html: node.excerpt }}
          />
          <PostIcons
            node={node.frontmatter}
            readingTime={node.fields && node.fields.readingTime.text}
            marginTopNegative
          />
        </PostSnippet>
      ))}
  </Container>
)

PostList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
  header: PropTypes.string,
  subHeader: PropTypes.string,
  withTags: PropTypes.bool,
  allTags: PropTypes.array,
}

PostList.defaultProps = {
  data: {},
  header: '',
  subHeader: '',
  withTags: false,
  allTags: [],
}

export default PostList

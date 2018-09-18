/* eslint-disable */
import React from "react"
import { Link } from "gatsby"
import { Header, SubHeader } from "../components/General"
import { ClockIcon } from "react-icons/lib/fa"
// import { Link, Timestamp } from '../../components/Misc';
import { Box } from "../components/Layout"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import PostIcons from "../components/PostIcons"

const linkStyles = css`
  box-shadow: none;
`

const Talks = ({ data }) => {
  // const { edges: posts } = data.allMarkdownRemark;
  console.log("DATA", data)
  return (
    <Box>
      <Box
        width={[1, 1, 720]}
        m={["3.5rem 0 0 0", "3.5rem 0 0 0", "3.5rem auto 0 auto"]}
        px={[3, 3, 0]}
      >
        <Header>Talks</Header>
        <SubHeader>Spoken thoughts.</SubHeader>
        <div>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ))}
        </div>
      </Box>
    </Box>
  )
}

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
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          ...PostIcons
        }
      }
    }
  }
`

export default Talks

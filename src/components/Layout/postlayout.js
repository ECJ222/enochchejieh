/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Gist from 'super-react-gist'
import Layout from '../Layout/layout'
import Header from '../Headers/header'
import SEO from '../seo'
import '../../styles/main.scss'

const shortcodes = { Gist }

const PostLayout = ({ data: { mdx } }) => {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Header />
      <div id="blog-post">
        <div className="head">
          <h1 className="title mr-2">{mdx.frontmatter.title}</h1>
          <span className="mr-2">{mdx.frontmatter.date}</span>
          <span className="mr-2">.</span>
          <span>⏱️ {mdx.fields.readingTime.text}</span>
        </div>
        <MDXProvider components={shortcodes}>
          <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

export default PostLayout

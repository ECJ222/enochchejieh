/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Articles = () => {
  const {
    allMdx: { edges: data }
  } = useStaticQuery(graphql`
    query allBlogs {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
              title
              description
            }
          }
        }
      }
    }
  `)

  const blogPosts = data.map(post => (
    <Link
      key={post.node.id}
      to={post.node.frontmatter.slug}
      className="writing"
      data-sal="slide-up"
      data-sal-duration="500"
    >
      <h4>{post.node.frontmatter.title}</h4>
      <span>
        {post.node.frontmatter.description}
      </span>
    </Link>
  ))

  return (
    <div id="articles">
      <h3>Articles</h3>

      <div className="writing-container">
        {blogPosts}
      </div>
    </div>
  )
}

export default Articles

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Writing = () => {
  const {
    allMdx: { edges: data }
  } = useStaticQuery(graphql`
    query blogIndex {
      allMdx (limit: 2) {
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
    <div className="writing-container" key={post.node.id}>
      <Link
        to={post.node.frontmatter.slug}
        className="writing"
        data-sal="slide-up"
        data-sal-duration="500"
      >
        <h4>{post.node.frontmatter.title}</h4>
        <span>{post.node.frontmatter.description}</span>
      </Link>
    </div>
  ))

  return (
    <div id="writing">
      <h3>Most Recent Articles</h3>
      <Link to="/writing" className="link">
        See all
      </Link>
      {blogPosts}
    </div>
  )
}

export default Writing

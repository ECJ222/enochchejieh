import React from 'react'
import { Link } from 'gatsby'

const Writing = () => {
  return (
    <div id="writing">
      <h3>Most Recent Articles</h3>
      <Link to="/writing" className="link">
        See all
      </Link>
      <div className="writing-container">
        <a
          href="https://medium.com/nerd-for-tech/a-beginners-guide-to-setting-up-ci-cd-with-github-actions-81554e7847d0"
          className="writing"
          data-sal="slide-up"
          data-sal-duration="500"
        >
          <h4>A Beginner’s Guide to Setting Up CI/CD With Github Actions</h4>
          <span>
            I wrote an article explaining how to setup CI/CD with Github Actions
          </span>
        </a>
      </div>
      <div className="writing-container">
        <a
          href="https://medium.com/nerd-for-tech/test-driven-development-in-react-with-react-testing-library-and-jest-8f85430441fb"
          className="writing"
          data-sal="slide-up"
          data-sal-duration="500"
        >
          <h4>
            Test-Driven Development in React with React Testing Library and Jest
          </h4>
          <span>
            I wrote an article on test driven development in react using react
            testing library and jest.
          </span>
        </a>
      </div>
    </div>
  )
}

export default Writing

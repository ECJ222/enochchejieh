import React from 'react'

const Articles = () => {
  return (
    <div id="articles">
      <h3>Articles</h3>

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
        <a
          href="https://medium.com/nerd-for-tech/how-to-optimize-your-productivity-as-a-software-developer-3399cdb870c9"
          className="writing"
          data-sal="slide-up"
          data-sal-duration="500"
        >
          <h4>How to Optimize Your Productivity as a Software Developer</h4>
          <span>
            I wrote an article explaining how to optimize your productivity as a
            Software Developer.
          </span>
        </a>
      </div>
    </div>
  )
}

export default Articles

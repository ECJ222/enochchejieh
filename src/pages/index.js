import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout/layout'
import Header from '../components/Headers/header'
import About from '../components/About/about'
import Writing from '../components/Writing/index'
import Contact from '../components/Contact/contact'
import '../styles/main.scss'
import SEO from '../components/seo'

const IndexPage = ({ location }) => {
  const hash = location.hash.split('#')[1]
  const currentRoute = hash || 'home'
  const title = currentRoute.replace(/^./, currentRoute[0].toUpperCase())

  return (
    <Layout>
      <SEO title={title} />
      <Header />
      <About />
      <Writing />
      <Contact />
    </Layout>
  )
}

IndexPage.propTypes = {
  location: PropTypes.object.isRequired
}

export default IndexPage

/* eslint-disable react/prop-types */
import React from 'react'
import Layout from '../components/Layout/layout'
import Header from '../components/Headers/header'
import Articles from '../components/Writing/articles'
import '../styles/main.scss'
import SEO from '../components/seo'

const Writing = () => {
  return (
    <Layout>
      <SEO title={'Articles'} />
      <Header />
      <Articles />
    </Layout>
  )
}

export default Writing

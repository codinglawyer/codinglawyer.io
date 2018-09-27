import React from 'react'
import PropTypes from 'prop-types'
import { Footer, Header } from '../components/General'
import AboutMe from '../components/Home/aboutMe'
import Layout from '../layouts'

const AboutTemplate = () => (
  <Layout isPost>
    <Header> About me</Header>
    <AboutMe />
  </Layout>
)

export default AboutTemplate

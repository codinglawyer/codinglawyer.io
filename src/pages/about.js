import React from 'react'
import { Header, Container } from '../components/General'
import AboutMe from '../components/Home/aboutMe'
import Layout from '../layouts'

const AboutTemplate = () => (
  <Layout isPost>
    <Container>
      <Header> About me</Header>
      <AboutMe />
    </Container>
  </Layout>
)

export default AboutTemplate

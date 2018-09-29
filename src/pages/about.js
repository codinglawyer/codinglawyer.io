import React from 'react'
import { Header, Container } from '../components/General'
import About from '../components/Home/About'
import Layout from '../layouts'

const AboutTemplate = () => (
  <Layout isPost>
    <Container>
      <Header>About me</Header>
      <About />
    </Container>
  </Layout>
)

export default AboutTemplate

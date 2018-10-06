import React from 'react'
import { Header, Container, Break } from '../components/General'
import About from '../components/Home/About'
import Layout from '../layouts'

const AboutTemplate = () => (
  <Layout title="About me" isPost>
    <Container>
      <Header>About</Header>
      <Break />
      <About />
    </Container>
  </Layout>
)

export default AboutTemplate

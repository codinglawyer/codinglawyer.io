import React from 'react'
import { Header, SubHeader, Container, Break } from '../components/Styled'
import About from '../components/Home/About'
import Layout from '../layouts'

const AboutTemplate = () => (
  <Layout title="About me" isPost>
    <Container>
      <Header>About</Header>
      <SubHeader>Me.</SubHeader>
      <Break />
      <About />
    </Container>
  </Layout>
)

export default AboutTemplate

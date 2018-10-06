import React from 'react'
import Layout from '../layouts'
import AboutConcise from '../components/Home/AboutConcise'
import Menu from '../components/Home/Menu'
import { rhythm } from '../utils/typography'
import { Break, Container } from '../components/General'
import Profile from '../components/Home/Profile'
import '../styles/globalStyles'

const Home = () => (
  <Layout title="Home" isIndex>
    <div
      css={{
        marginBottom: rhythm(1),
        fontFamily: ['Cousine', 'monospace'],
      }}>
      <Profile />
      <Container>
        <Break />
        <AboutConcise />
        <Break />
        <Menu />
      </Container>
    </div>
  </Layout>
)

export default Home

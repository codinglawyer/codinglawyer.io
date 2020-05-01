/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { IconContext } from "react-icons";
import Layout from '../layouts'
import AboutConcise from '../components/Home/AboutConcise'
import Menu from '../components/Home/Menu'
import { Break, Container } from '../components/Styled'
import Profile from '../components/Home/Profile'
import GlobalStyles from '../styles/globalStyles'

const Home = () => (
  <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
    <GlobalStyles />
      <Layout title="Home" isIndex>
        <div
          css={css`
            margin-bottom: 1.5rem;
            font-family: 'Cousine', 'monospace';
          `}>
          <Profile />
          <Container>
            <Break />
            <AboutConcise />
            <Break />
            <Menu />
          </Container>
        </div>
      </Layout>
  </IconContext.Provider>
)

export default Home

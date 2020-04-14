/** @jsx jsx */
import { css, jsx, CacheProvider } from '@emotion/core'
import { cache } from 'emotion'
import { IconContext } from "react-icons";
import Layout from '../layouts'
import AboutConcise from '../components/Home/AboutConcise'
import Menu from '../components/Home/Menu'
import { Break, Container } from '../components/Styled'
import Profile from '../components/Home/Profile'
import '../styles/globalStyles'

const Home = () => (
  <CacheProvider value={cache}>
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
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
  </CacheProvider>
)

export default Home

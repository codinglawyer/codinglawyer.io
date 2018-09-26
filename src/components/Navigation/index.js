import React from 'react'
import PropTypes from 'prop-types'
import { withState } from 'recompose'
import { push as Menu } from 'react-burger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import { Li, OlNav } from '../General'

const styles = {
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmMenu: {
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmItemList: {
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmMenuWrap: {
    marginTop: '100px',
  },
}

const Navigation = ({ children, isMenuOpen, setIsMenuOpen }) => (
  <div>
    <Menu
      isOpen={isMenuOpen}
      customBurgerIcon={false}
      customCrossIcon={false}
      noOverlay
      onStateChange={state => setIsMenuOpen(state.isOpen)}
      width="100%"
      styles={styles}
      pageWrapId="page-wrap">
      <OlNav>
        <Li>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="home"
            className="menu-item"
            href="/">
            Index
          </a>
        </Li>
        <Li>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="home"
            className="menu-item"
            href="/blog">
            Blog
          </a>
        </Li>

        <Li>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="home"
            className="menu-item"
            href="/talks">
            Talks
          </a>
        </Li>
      </OlNav>
    </Menu>
    <div
      css={{
        position: 'absolute',
        left: '36px',
        top: '36px',
      }}>
      <HamburgerMenu
        isOpen={isMenuOpen}
        menuClicked={() => setIsMenuOpen(!isMenuOpen)}
        width={35}
        height={30}
        strokeWidth={7}
        color="black"
        borderRadius={1}
        animationDuration={0.5}
      />
    </div>
    <main id="page-wrap">{children}</main>
  </div>
)

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
}

export default withState('isMenuOpen', 'setIsMenuOpen', false)(Navigation)

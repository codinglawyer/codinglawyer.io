import React from 'react'
import PropTypes from 'prop-types'
import HamburgerMenu from 'react-hamburger-menu'
import { withState } from 'recompose'
import { push as Menu } from 'react-burger-menu'
import { NavLi, OlNav, styles } from './styles'

const Navigation = ({ children, isMenuOpen, setIsMenuOpen }) => (
  <div css={{ fontFamily: ['Cousine', 'monospace'] }}>
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
        <NavLi>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="home"
            className="menu-item"
            href="/">
            Index
          </a>
        </NavLi>
        <NavLi>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="home"
            className="menu-item"
            href="/blog">
            Blog
          </a>
        </NavLi>

        <NavLi>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="home"
            className="menu-item"
            href="/talks">
            Talks
          </a>
        </NavLi>
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

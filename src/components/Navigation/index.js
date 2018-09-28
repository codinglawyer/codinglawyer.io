import React from 'react'
import PropTypes from 'prop-types'
import HamburgerMenu from 'react-hamburger-menu'
import { withState } from 'recompose'
import { push as Menu } from 'react-burger-menu'
import { NavLi, OlNav, OuterContainer, InnerContainer, styles } from './styles'

const Navigation = ({ children, isIndex, isMenuOpen, setIsMenuOpen }) => (
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
        <NavLi>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="index"
            className="menu-item"
            href="/">
            Index
          </a>
        </NavLi>
        <NavLi>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="blog"
            className="menu-item"
            href="/blog">
            Blog
          </a>
        </NavLi>
        <NavLi>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="talks"
            className="menu-item"
            href="/talks">
            Talks
          </a>
        </NavLi>
        <NavLi>
          <a
            onClick={() => setIsMenuOpen(false)}
            id="about"
            className="menu-item"
            href="/about">
            About me
          </a>
        </NavLi>
      </OlNav>
    </Menu>
    {!isIndex && (
      <OuterContainer>
        <InnerContainer>
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
        </InnerContainer>
      </OuterContainer>
    )}
    <main id="page-wrap">{children}</main>
  </div>
)

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  isIndex: PropTypes.bool,
}

Navigation.defaultProps = {
  isIndex: false,
}

export default withState('isMenuOpen', 'setIsMenuOpen', false)(Navigation)

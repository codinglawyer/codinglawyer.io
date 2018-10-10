import React from 'react'
import PropTypes from 'prop-types'
import HamburgerMenu from 'react-hamburger-menu'
import { Link } from 'gatsby'
import { withState } from 'recompose'
import { push as Menu } from 'react-burger-menu'
import { NavLi, OlNav, OuterContainer, InnerContainer, styles } from './styles'

const Navigation = ({ children, isIndex, isMenuOpen, setIsMenuOpen }) => (
  <div id="outer-container">
    <Menu
      isOpen={isMenuOpen}
      customBurgerIcon={false}
      customCrossIcon={false}
      noOverlay
      onStateChange={state => setIsMenuOpen(state.isOpen)}
      width="100%"
      styles={styles}
      pageWrapId="page-wrap"
      outerContainerId="outer-container">
      <OlNav>
        <NavLi>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Index
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/posts" onClick={() => setIsMenuOpen(false)}>
            Posts
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/talks" onClick={() => setIsMenuOpen(false)}>
            Talks
          </Link>
        </NavLi>
        <NavLi>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            About me
          </Link>
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

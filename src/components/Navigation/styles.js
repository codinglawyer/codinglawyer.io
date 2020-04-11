import styled from '@emotion/styled'
import { css } from '@emotion/core'
import mq from '../../utils/styling'

export const styles = {
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmMenuWrap: {
    padding: '0 15px 50px',
    marginBottom: '150px',
  },
}

export const NavLi = styled.li`
  border-top: 2px solid #333;
  padding: 0.8rem 0;
  margin: 0;
  ${mq.large(css`
    padding: 1.5rem 0;
  `)};
`
export const OlNav = styled.ol`
  font-size: 1.2rem;
  list-style: decimal-leading-zero inside;
  margin: 0;
  width: 750px;
  font-family: 'Cousine', 'monospace';
  ${mq.large(css`
    padding: 6rem 2rem 0;
  `)};
  ${mq.medium(css`
    padding: 3.5rem 1.5rem 0;
  `)};

  ${NavLi}:last-child {
    border-bottom: 2px solid #333;
  }
  ${NavLi}:first-child {
    border-top: none;
  }
`

export const OuterContainer = styled.div`
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999999;

  @media (min-width: 915px) {
    background: none;
    top: 0;
    height: 40px;
    right: auto;
    bottom: auto;
  }
  @media (max-width: 915px) {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    );
    height: 180px;
    pointer-events: none;
  }
`

export const InnerContainer = styled.div`
  bottom: 20px;
  height: 40px;
  left: 20px;
  padding: 0;
  pointer-events: auto;
  position: absolute;
  width: 40px;
  -webkit-appearance: none;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  @media (min-width: 1200px) {
    left: 40px;
    top: 40px;
  }

  @media (min-width: 1024px) {
    height: 60px;
    width: 60px;
  }

  @media (min-width: 915px) {
    bottom: auto;
    top: 20px;
  }
`

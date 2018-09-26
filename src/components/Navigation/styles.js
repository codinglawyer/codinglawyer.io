import styled from 'react-emotion'

export const styles = {
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

export const NavLi = styled.li`
  font-size: 1.4rem;
  border-top: 2px solid #333;
  padding: 1.5rem 0;
  margin: 0;
`
export const OlNav = styled.ol`
  list-style: decimal-leading-zero inside;
  margin: 0;
  width: 750px;

  ${NavLi}:last-child {
    border-bottom: 2px solid #333;
  }
`

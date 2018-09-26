import styled from 'react-emotion'

export const Ol = styled.ol`
  list-style: decimal-leading-zero inside;
  margin: 0;
`

export const Li = styled.li`
  cursor: default;
  margin-bottom: 16px;
`

export const A = styled.span`
  box-shadow: inset 0 -1px 0 #333;
  color: #333;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: inset 0 -1px 0 #f85649;
    color: #f85649;
  }
`

export const Description = styled.span`
  margin-bottom: 10px;
`

export const Break = styled.hr`
  border: 0;
  margin: 0 0 1.11111rem;
  max-width: 100%;
  height: 20px;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    margin: 1.11111rem 0 1.22222rem;
  }
`

export const Header = styled.h1`
  margin: 0;
`

export const SubHeader = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: rgb(0, 0, 0);
`

export const HeaderPost = styled.h1`
  font-size: 1.66667rem;
  font-weight: 900;
  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 25px;
  }
`

export const Footer = styled.footer`
  color: #767676;
`

export const Tags = styled.div`
  margin-bottom: 3rem;
  @media (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    display: block;
  }
`

export const StyledBtn = styled.a`
  border: 2px solid #000;
  border-bottom-width: 7px;
  box-shadow: inset 0 -1px 0 #000, 5px 5px 0 rgba(0, 96, 193, 0.25),
    -5px -5px 0 rgba(0, 96, 193, 0.25);
  color: #000;
  display: inline-block;
  font-weight: bold;
  overflow: hidden;
  padding: 5px 4px 2px;
  position: relative;
  transition: box-shadow 0.4s ease-in-out;

  &:before,
  &:after {
    content: '▶';
    display: inline-block;
    position: relative;
    text-align: center;
    top: 1px;
    width: 26px;
  }

  &:after {
    content: '◀';
  }

  &:hover {
    box-shadow: inset 0 -300px 0 #fff, 5px 5px 0 rgba(0, 96, 193, 0.25),
      -5px -5px 0 rgba(0, 96, 193, 0.25);
    border-bottom-width: 7px;
    padding-bottom: 2px;
  }
`

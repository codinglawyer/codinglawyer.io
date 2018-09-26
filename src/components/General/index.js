import styled from 'react-emotion'
import profilePhoto from '../../assets/images/profile.png'

export const ListItem = styled.li`
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

export const Ol = styled.ol`
  list-style: decimal-leading-zero inside;
  margin: 0;
`

export const Li = styled.li`
  font-size: 1.4rem;
  border-top: 2px solid #333;
  padding: 1.5rem 0;
  margin: 0;
`
export const OlNav = styled.ol`
  list-style: decimal-leading-zero inside;
  margin: 0;
  width: 750px;

  ${Li}:last-child {
    border-bottom: 2px solid #333;
  }
`

export const Container = styled.div`
  margin: 0 auto;

  @media (min-width: 1024px) and (min-height: 680px) {
    align-items: center;
    display: flex;
    height: 100vh;
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 4rem;
  margin: 0 0 16px;
  font-weight: 900;
  line-height: 1;
  text-align: center;
`

export const Subtitle = styled.h2`
  font-family: 'Cousine', monospace;
  font-size: 1.22222rem;
  font-weight: 400;
  margin: 0 0 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.44444rem;
  }
`

export const Name = styled.h2`
  font-size: 2rem;
  text-align: center;
`

export const FooterImage = styled.div`
  background-image: url(${profilePhoto});
  background-size: cover;
  border-radius: 50%;
  float: right;
  margin: 0 12px 0 0;
  height: 100px;
  width: 100px;

  @media (min-width: 768px) {
    height: 100px;
    margin: 0 20px 30px 0;
    width: 100px;
  }

  @media (min-width: 1024px) {
    float: left;
    margin-left: -112px;
  }
`

export const Image = styled.div`
  background-image: url(${profilePhoto});
  height: 180px;
  width: 180px;
  background-size: cover;
  border-radius: 50%;
  @media (min-width: $ds-breakpoint-iphone6-width) {
    height: 120px;
    padding-top: 6px;
    width: 120px;
  }

  @media (min-width: $ds-breakpoint-tablet) {
    height: 140px;
    padding-top: 20px;
    width: 140px;
  }
`

export const Description = styled.span`
  margin-bottom: 10px;
`

export const Col1 = styled.div`
  flex: 70%;
`

export const Col2 = styled.div`
  flex: 30%;
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

export const Signature = styled.div`
  text-align: center;
  margin: 2.2rem 0;
  font-size: 0.8rem;
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

export const InviteMeBtn = styled.a`
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

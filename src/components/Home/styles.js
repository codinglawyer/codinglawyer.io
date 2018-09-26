import styled from 'react-emotion'
import profilePhoto from '../../assets/images/profile.png'

export const Title = styled.h1`
  font-size: 3.5em;
  margin: 0 0 16px;
  font-weight: 900;
  line-height: 1;
  text-align: right;
`

export const Subtitle = styled.h2`
  font-family: 'Cousine', monospace;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 0 20px;
  text-align: right;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

export const Name = styled.h2`
  font-size: 1.5rem;
  text-align: right;
  font-family: 'Cousine', monospace;
  font-weight: 200;
`

export const Col1 = styled.div`
  flex: 70%;
`

export const Col2 = styled.div`
  flex: 30%;
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

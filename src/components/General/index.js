import styled from "react-emotion"
import profilePhoto from "../../assets/images/profile.png"

export const ListItem = styled.li`
  cursor: default;
  margin-bottom: 16px;
`

export const A = styled.span`
  box-shadow: inset 0 -1px 0 #333;
    color: #333;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  &:hover {
    box-shadow: inset 0 -1px 0 #F85649;
    color: #F85649;
  }
`

export const Ol = styled.ol`
  list-style: decimal-leading-zero inside;
  margin: 0;
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
  font-family: "Cousine", monospace;
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

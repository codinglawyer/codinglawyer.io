import styled from 'react-emotion'
import { css } from 'emotion'
import mq from '../../utils/styling'
import profilePhoto from '../../images/david-kopal.jpg'

export const Title = styled.h1`
  font-size: 1.1rem;
  margin: 0 0 10px;
  font-weight: 900;
  text-align: left;
  ${mq.large(css`
    font-size: 2.5rem;
    margin: 0 0 16px;
  `)};
`

export const Subtitle = styled.h2`
  font-size: 0.7rem;
  margin: 0 0 10px;
  text-align: left;
  font-family: 'Cousine', monospace;
  font-weight: 200;
  ${mq.large(css`
    font-size: 1.4rem;
    margin: 0 0 16px;
  `)};
`

export const Description = styled.h2`
  font-family: 'Cousine', monospace;
  font-size: 0.6rem;
  font-weight: 400;
  margin: 0 0 10px;
  text-align: left;
  ${mq.large(css`
    font-size: 1rem;
    margin: 0 0 16px;
  `)};
`

export const TextContainer = styled.div`
  flex: 70%;
`

export const PictureContainer = styled.div`
  flex: 30%;
`

export const Image = styled.div`
  background-image: url(${profilePhoto});
  height: 100px;
  padding-top: 6px;
  width: 100px;
  background-size: cover;
  border-radius: 50%;
  ${mq.large(css`
    height: 180px;
    width: 180px;
  `)};
`

export const FooterImage = styled.div`
  background-image: url(${profilePhoto});
  background-size: cover;
  border-radius: 50%;
  float: right;
  margin: 0 12px 0 -112;
  height: 100px;
  width: 100px;
  ${mq.large(css`
    float: left;
    margin-left: -112px;
  `)};
`

export const Item = styled.div`
  margin: 0.4rem 0;
`

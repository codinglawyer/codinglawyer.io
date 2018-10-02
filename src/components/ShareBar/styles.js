import styled from 'react-emotion'
import { css } from 'emotion'

export const SocialContainer = styled.div`
  display: inline-flex;
  margin-bottom: 1rem;
`

export const Message = styled.div`
  margin-bottom: 1rem;
  font-style: italic;
`

export const className = css`
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`

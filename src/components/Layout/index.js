import styled from 'react-emotion'
import { justifyContent, style } from 'styled-system'

const wrap = style({
  prop: 'wrap',
  cssProperty: 'flexWrap',
})

export const Flex = styled.div`
  display: flex;
  ${justifyContent} ${wrap};
`

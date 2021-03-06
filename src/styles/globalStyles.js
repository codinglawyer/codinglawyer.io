/* eslint-disable */
import { css, Global } from '@emotion/core'

const GlobalStyles = () => (
  <Global
    styles={css`
      a {
        text-decoration: none;
        color: black;
      }
      ul li{
        margin: 0;
      }
      .markup--p-anchor, em a, .link {
        box-shadow: inset 0 -5px 0 rgba(0,96,193,0.25);
        color: black;
        -webkit-transition: box-shadow .4s ease-in-out;
        transition: box-shadow .4s ease-in-out;
        &:hover{
          box-shadow: inset 0 -300px 0 rgba(0,96,193,0.25);
        }
      }
      .graf--figure, a, img {
        height: auto
      }
      .language-js code{
        font-size: 0.65rem;
      }
      .bm-menu &:focus {
        outline: none !important;
      }
      .react-icons {
        vertical-align: middle;
      }
    `}
  />
)

export default GlobalStyles

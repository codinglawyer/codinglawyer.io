/* eslint-disable */
import { injectGlobal } from 'emotion'

injectGlobal`
  a {
    text-decoration: none;
    color: black;
  }
  ul li{
    margin: 0;
  }
  pre {
    background-color: rgba(0, 0, 0, 0.05);
    overflow-x: scroll;
  }
  pre code {
    font-size: 18px;
  }
  p code {
    background-color: rgba(0, 0, 0, 0.05);
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
  .gatsby-resp-image-wrapper {
    display: inline !important
  }
`

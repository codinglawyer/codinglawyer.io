/* eslint-disable */
import { injectGlobal } from 'emotion'

injectGlobal`
  h1 {
    font-size: 4.2rem;
    font-weight: 900;
  }
  h2 {
    font-size: 2.6rem;
    fontWeight: 900;
  }
  h3 {
    fonts-ize: 1.6rem;
    margin-bottom: 0.74rem;
  }
  a {
    text-decoration: none;
    color: black;
  }
  .graf--pre {
    background-color: rgba(0, 0, 0, 0.05);
    font-size: 18px;
    line-height: 1.6;
    overflow-x: scroll;
  }
  .markup--p-anchor, em a {
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
`

import { injectGlobal } from "emotion"

injectGlobal`
  a {
    text-decoration: none;
  }
  .graf--pre {
    background-color: rgba(0, 0, 0, 0.05);
    font-size: 18px;
    line-height: 1.6;
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
`

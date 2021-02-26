import { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors';

export default createGlobalStyle`
  @media(max-width: 1080px){
   html {
     font-size: 93.75%;
   }
  }
  @media(max-width: 720px){
    html {
     font-size: 87.5%;
    }
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  a {
    text-decoration: none;
  }
  body {
    background-color: #fff;
    color: ${Colors.text};
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
  }
  button{
    border: none;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  ul > li {
    list-style: none;
  }
  button {
    cursor: pointer;
  }

`;

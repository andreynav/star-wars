import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600:800&display=swap');
  
  :root {
    /* Typography */
    --family: 'Montserrat', sans-serif;
    --fs-eesm: 10px;
    --fs-esm: 12px;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 24px;
    --fw-light: 300;
    --fw-normal: 600;
    --fw-bold: 800;

    /* Other */
    --radii: 0.5rem;
    --colors-link: #26a4f5;
  }

  body[data-theme='dark'] {
    --colors-text: #FFFFFF;
    --color-title-text: red;
    --colors-bg: #202C37;
    --colors-ui-base: #2b3945;
    --colors-placeholder: #999;
    --colors-controls-border: #808080;
    --color-toggle: #fff;
    --color-data-title: #c8c8ca;
    --colors-image-border: #FFFFFF;
    --colors-active-link: #ffc812;

    --shadow: rgba(245, 245, 245, 0.2) 0 0 8px;
    --card-shadow: 5px -4px 17px 9px rgba(238, 59, 8, 0.3);
  }
  
  body[data-theme='light'] {
    --colors-text: #111517;
    --color-title-text: blue;
    --colors-bg: #fafafa;
    --colors-ui-base: #ffffff;
    --colors-placeholder: #666;
    --colors-controls-border: #696969;
    --color-toggle: transparent;
    --color-data-title: #373737;
    --colors-image-border: #1f2c37;
    --colors-active-link: #896900;

    --shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    --card-shadow: 5px -4px 17px 9px rgba(8, 96, 238, 0.3);
  }
  
  html, body {
    font-family: var(--family);
    font-size: var(--fs-md);
    color: var(--colors-text);
    font-weight: var(--fw-light);
    background-color: var(--colors-bg);
    
    margin: 0;
    padding: 0;
    line-height: 1.25;
    height: 100%;
    //font-family: 'Montserrat', sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  main {
    display: block;
  }

  menu, ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }
  
  a {
    background-color: transparent;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  code,
  kbd,
  samp {
    font-family: source-code-pro, Menlo, Monaco, Consolas, monospace;
    font-size: 1em;
  }
  
  small {
    font-size: 80%;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  img {
    border-style: none;
  }
  
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }
  
  button,
  select {
    text-transform: none;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  progress {
    vertical-align: baseline;
  }
  
  textarea {
    overflow: auto;
  }
  
  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  [hidden] {
    display: none;
  }

  *, *::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

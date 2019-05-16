import { createGlobalStyle } from 'styled-components';

import theme from './theme';
import media from './media';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    margin: 0;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${theme.colors.navy};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${theme.fontSizes.xlarge};
    ${media.phablet`font-size: ${theme.fontSizes.large};`};
    color: ${theme.colors.slate};
    line-height: 1.25;

    &.hidden {
      overflow: hidden;
    }

    &.blur {
      overflow: hidden;

      #root > .container > * {
        filter: blur(5px) brightness(0.7);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  ::selection {
    background-color: ${theme.colors.highlight};
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 600;
    color: ${theme.colors.white};
    margin: 0 0 10px 0;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }


  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${theme.colors.offWhite};
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${theme.colors.gold};
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;

    &:focus,
    &:active {
      outline-color: ${theme.colors.teal};
    }
  }

  input,
  textarea {
    padding: 10px 5px 10px 8px;
    background-color: ${theme.colors.darkGrey};
    border-radius: ${theme.borderRadius};
    border: 2px solid transparent;
    font-size: ${theme.fontSizes.medium};
    color: ${theme.colors.lightestSlate};

    &:focus {
      outline: 0;
      border: 1px solid ${theme.colors.teal};
    }

    &::placeholder {
      color: ${theme.colors.offWhite};
    }

    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  textarea {
    resize: none;
  }

  button {
    &:focus {
      outline: 0;
      border: 1px solid ${theme.colors.teal};
    }

    &:active {
      position: relative;
      top: 1px;
    }
  }

  p {
    margin: 0 0 25px 0;
    line-height: 1.5;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .gatsby-image-outer-wrapper {
    height: 100%;
  }

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms ${theme.easing}, transform 300ms ${theme.easing};
  }

  .fade-enter {
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }
`;

export default GlobalStyle;

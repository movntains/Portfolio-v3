import { css, keyframes } from 'styled-components';
import theme from './theme';
import media from './media';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    transition: ${theme.transition};
    cursor: pointer;

    &:hover,
    &:active,
    &:focus {
      color: ${theme.colors.blue};
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    transition: ${theme.transition};
    cursor: pointer;
    color: ${theme.colors.blue};

    &:hover,
    &:focus,
    &:active {
      color: ${theme.colors.blue};
      outline: 0;

      &:after {
        width: 100%;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      width: 0;
      height: 1px;
      bottom: 0.37em;
      background-color: ${theme.colors.blue};
      transition: ${theme.transition};
    }
  `,

  smallButton: css`
    padding: 12px 17px;
    background-color: transparent;
    border: 1px solid ${theme.colors.blue};
    border-radius: ${theme.borderRadius};
    font-size: ${theme.fontSizes.smallish};
    color: ${theme.colors.blue};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transblue};
    }

    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    padding: 18px 23px;
    background-color: transparent;
    border: 1px solid ${theme.colors.blue};
    border-radius: ${theme.borderRadius};
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.blue};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus,
    &:active {
      background-color: ${theme.colors.transblue};
    }

    &:after {
      display: none !important;
    }
  `,

  sidePadding: css`
    padding: 0 150px;
    ${media.desktop`padding: 0 100px;`};
    ${media.tablet`padding: 0 50px;`};
    ${media.phablet`padding: 0 25px;`};
  `,

  slideDown: keyframes`
    from {
      height: 0;
    }

    to {
      height: 230px;
    }
  `,

  slideUp: keyframes`
    from {
      height: 230px;
    }

    to {
      height: 0;
    }
  `,

  fadeIn: keyframes`
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  `
};

export default mixins;

import { css } from 'styled-components';

const sizes = {
  giant: 1440,
  desktop: 1000,
  tablet: 768,
  thone: 600,
  phablet: 480,
  phone: 376,
  tiny: 330
};

// Iterate through the sizes & create a media template
const media = Object.keys(sizes).reduce((accumulator, label) => {
  // Use em in breakpoints to work properly cross-browser & support users
  // Changing their browser's font size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});

export default media;

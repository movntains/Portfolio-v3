import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import media from '../styles/media';

const SITE_INFO_ARRAY = [
  {
    item: 'This site was developed with Gatsby.js v2.'
  },
  {
    item: `It's styled with styled-components.`
  },
  { item: `It's hosted on Netlify.` },
  { item: 'Blog posts are retrieved with a GraphQL query.' },
  { item: 'The icons utilized for list items are Zondicons.' },
  { item: 'The logo was created in Adobe XD.' }
];

const SiteInfoItem = styled.li`
  .icon {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    fill: ${theme.colors.teal};
  }

  p {
    display: inline-block;
    margin-bottom: 10px;
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.lightSlate};
    ${media.phablet`font-size: ${theme.fontSizes.medium}`};
    ${media.phone`font-size: ${theme.fontSizes.smallish}`};
  }
`;

const SiteInfo = () =>
  SITE_INFO_ARRAY.map(({ item }, i) => (
    <SiteInfoItem key={i}>
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z" />
      </svg>
      <p>{item}</p>
    </SiteInfoItem>
  ));

export default SiteInfo;

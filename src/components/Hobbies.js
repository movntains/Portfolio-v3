import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import media from '../styles/media';

const HOBBIES_ARRAY = [
  { name: 'Reading' },
  { name: 'Playing tennis' },
  { name: 'Rooting for Philadelphia and Colorado sports teams' },
  { name: 'Watching The Big Bang Theory or Game of Thrones' },
  { name: 'Enjoying/wishing for cold weather' },
  { name: 'Learning Spanish' }
];

const HobbyItem = styled.li`
  .icon {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    fill: ${theme.colors.teal};
  }

  .hobby {
    display: inline-block;
    margin-bottom: 5px;
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.lightSlate};
    ${media.phablet`font-size: ${theme.fontSizes.small}`};
    ${media.tiny`font-size: ${theme.fontSizes.xsmall}`};
  }
`;

const Hobbies = () =>
  HOBBIES_ARRAY.map(({ name }, i) => (
    <HobbyItem key={i}>
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z" />
      </svg>
      <p className="hobby">{name}</p>
    </HobbyItem>
  ));

export default Hobbies;

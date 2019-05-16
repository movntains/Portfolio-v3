import styled from 'styled-components';

import theme from './theme';
import media from './media';

const MinorHeading = styled.h4`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 50px 0 20px;
  white-space: nowrap;
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.gold};
  text-transform: uppercase;
  ${media.tablet`font-size: 18px;`};

  &:after {
    content: '';
    display: block;
    position: relative;
    top: 2px;
    width: 100%;
    height: 1px;
    margin-left: 20px;
    background-color: ${theme.colors.grey};
    ${media.thone`margin-left: 10px;`};
  }
`;

export default MinorHeading;

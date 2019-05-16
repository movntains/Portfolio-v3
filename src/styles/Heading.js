import styled from 'styled-components';

import theme from './theme';
import media from './media';

const Heading = styled.h1`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 10px 0 40px;
  white-space: nowrap;
  font-size: ${theme.fontSizes.h3};
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${theme.colors.teal};
  ${media.tablet`font-size: 24px;`};

  &:after {
    content: '';
    display: block;
    position: relative;
    top: 1px;
    width: 100%;
    height: 1px;
    margin-left: 20px;
    background-color: ${theme.colors.teal};
    ${media.thone`margin-left: 10px;`};
  }
`;

export default Heading;

import styled from 'styled-components';

import theme from './theme';

const Subheading = styled.h4`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 10px 0 5px 0;
  font-size: ${theme.fontSizes.xlarge};
  font-weight: 400;
  color: ${theme.colors.lightSlate};
`;

export default Subheading;

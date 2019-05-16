import styled from 'styled-components';

import mixins from './mixins';

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  ${mixins.sidePadding};
  font-weight: 300;
`;

export default Main;

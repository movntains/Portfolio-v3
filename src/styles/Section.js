import styled from 'styled-components';

import media from './media';
import mixins from './mixins';

const Section = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 150px 0;
  animation-name: ${mixins.fadeIn};
  animation-duration: 1.5s;
  ${media.tablet`padding: 100px 0;`};
`;

export default Section;

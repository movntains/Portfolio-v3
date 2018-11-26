import React from 'react';
import styled from 'styled-components';

import media from '../../styles/media';
import renderSkills from '../../utils/renderSkills';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  ${media.desktop`flex-direction: column;`};
`;

const SkillContainer = styled.div`
  width: 33%;
  ${media.desktop`width: 100%; margin-bottom: 25px;`};
`;

const SkillsList = styled.ul`
  list-style: none;
`;

const DEVELOPMENT_TOOLS_ARRAY = [
  { skill: 'Git' },
  { skill: 'Gulp' },
  { skill: 'Heroku' },
  { skill: 'npm' }
];

const DevelopmentTools = () => (
  <Container>
    <SkillContainer>
      <SkillsList>{renderSkills(DEVELOPMENT_TOOLS_ARRAY)}</SkillsList>
    </SkillContainer>
  </Container>
);

export default DevelopmentTools;

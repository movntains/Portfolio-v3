import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';
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

const FrameworkHeading = styled.h4`
  margin-bottom: 10px;
  padding-bottom: 2px;
  color: ${theme.colors.lightestSlate};
  font-style: italic;
`;

const FRAMEWORKS_FRONTEND = [
  { skill: 'Bootstrap' },
  { skill: 'jQuery' },
  { skill: 'Next.js' },
  { skill: 'React' },
  { skill: 'Redux' }
];

const FRAMEWORKS_BACKEND = [{ skill: 'Express.js' }, { skill: 'Node.js' }];

const FRAMEWORKS_TEST = [{ skill: 'Mocha' }];

const Frameworks = () => (
  <Container>
    <SkillContainer>
      <FrameworkHeading>Front-End</FrameworkHeading>
      <SkillsList>{renderSkills(FRAMEWORKS_FRONTEND)}</SkillsList>
    </SkillContainer>
    <SkillContainer>
      <FrameworkHeading>Back-End</FrameworkHeading>
      <SkillsList>{renderSkills(FRAMEWORKS_BACKEND)}</SkillsList>
    </SkillContainer>
    <SkillContainer>
      <FrameworkHeading>Test</FrameworkHeading>
      <SkillsList>{renderSkills(FRAMEWORKS_TEST)}</SkillsList>
    </SkillContainer>
  </Container>
);

export default Frameworks;

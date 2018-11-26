import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import theme from '../styles/theme';
import Main from '../styles/Main';
import Section from '../styles/Section';
import Heading from '../styles/Heading';
import MinorHeading from '../styles/MinorHeading';
import ProgrammingLanguages from '../components/skills/ProgrammingLanguages';
import Frameworks from '../components/skills/Frameworks';
import Databases from '../components/skills/Databases';
import TemplateEngines from '../components/skills/TemplateEngines';
import DevelopmentTools from '../components/skills/DevelopmentTools';
import DesignTools from '../components/skills/DesignTools';

const SkillsContainer = styled(Section)`
  position: relative;

  span {
    font-style: italic;
    color: ${theme.colors.lightSlate};
  }
`;

class SkillsPage extends Component {
  render() {
    return (
      <Layout>
        <Main>
          <SkillsContainer>
            <Heading>Skills</Heading>
            <p>
              I believe in the motto <span>"never stop learning"</span>, so I am
              always working to improve my current skills as well as to add new
              skills to my repertoire. This goes for technical skills as well as
              soft skills.
            </p>
            <MinorHeading>Programming Languages</MinorHeading>
            <ProgrammingLanguages />
            <MinorHeading>Frameworks & Libraries</MinorHeading>
            <Frameworks />
            <MinorHeading>Databases</MinorHeading>
            <Databases />
            <MinorHeading>Template Engines</MinorHeading>
            <TemplateEngines />
            <MinorHeading>Development Tools</MinorHeading>
            <DevelopmentTools />
            <MinorHeading>Design Tools</MinorHeading>
            <DesignTools />
          </SkillsContainer>
        </Main>
      </Layout>
    );
  }
}

export default SkillsPage;

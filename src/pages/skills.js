import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';
import Heading from '../styles/Heading';
import MinorHeading from '../styles/MinorHeading';
import ProgrammingLanguages from '../components/skills/ProgrammingLanguages';
import Frameworks from '../components/skills/Frameworks';
import Databases from '../components/skills/Databases';
import DevOpsTools from '../components/skills/DevOpsTools';
import TemplateEngines from '../components/skills/TemplateEngines';
import DevelopmentTools from '../components/skills/DevelopmentTools';
import DesignTools from '../components/skills/DesignTools';

const SkillsContainer = styled(Section)`
  position: relative;
`;

class SkillsPage extends Component {
  render() {
    return (
      <Layout>
        <Main>
          <SkillsContainer>
            <Heading>Skills</Heading>
            <p>
              I am dedicated to being a lifelong learner, so I am always working
              to improve my current skills, as well as to add new skills to my
              repertoire. I recognize that the software development field is
              constantly evolving, so I am always open to branching out and
              learning new languages, frameworks, and tools.
            </p>
            <MinorHeading>Programming Languages</MinorHeading>
            <ProgrammingLanguages />
            <MinorHeading>Frameworks & Libraries</MinorHeading>
            <Frameworks />
            <MinorHeading>Databases</MinorHeading>
            <Databases />
            <MinorHeading>DevOps Tools</MinorHeading>
            <DevOpsTools />
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

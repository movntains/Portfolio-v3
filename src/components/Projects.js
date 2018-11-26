import React, { Component } from 'react';
import styled from 'styled-components';

import media from '../styles/media';
import Section from '../styles/Section';
import Heading from '../styles/Heading';
import ProjectFilter from './ProjectFilter';
import renderProjects from '../utils/renderProjects';
import { ALL_PROJECTS } from '../projects/allProjects';

const ProjectsContainer = styled(Section)`
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  ${media.desktop`flex-direction: column;`};
`;

const ProjectDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;
  ${media.desktop`width: 100%;`};
`;

class Project extends Component {
  filterProjects = props => {
    switch (props.location.pathname) {
      case '/projects/':
        return renderProjects(ALL_PROJECTS);
      case '/projects/graphQL/':
        return renderProjects(
          ALL_PROJECTS.filter(({ tech }) => tech.includes('GraphQL'))
        );
      case '/projects/mongoDB/':
        return renderProjects(
          ALL_PROJECTS.filter(({ tech }) => tech.includes('MongoDB'))
        );
      case '/projects/node/':
        return renderProjects(
          ALL_PROJECTS.filter(({ tech }) => tech.includes('Node.js'))
        );
      case '/projects/react/':
        return renderProjects(
          ALL_PROJECTS.filter(({ tech }) => tech.includes('React'))
        );
      case '/projects/front-end/':
        return renderProjects(
          ALL_PROJECTS.filter(project => project.tag === 'front-end')
        );
      case '/projects/full-stack/':
        return renderProjects(
          ALL_PROJECTS.filter(project => project.tag === 'full-stack')
        );
      default:
        return renderProjects(ALL_PROJECTS);
    }
  };

  render() {
    return (
      <ProjectsContainer>
        <Heading>Projects</Heading>
        <FlexContainer>
          <ProjectFilter />
          <ProjectDisplayContainer>
            {this.filterProjects(this.props)}
          </ProjectDisplayContainer>
        </FlexContainer>
      </ProjectsContainer>
    );
  }
}

export default Project;

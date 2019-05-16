import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../styles/theme';
import mixins from '../styles/mixins';
import FolderIcon from '../components/icons/FolderIcon';
import GitHubIcon from '../components/icons/GitHubIcon';
import ExternalLinkIcon from '../components/icons/ExternalLinkIcon';

const ProjectInner = styled.div`
  ${mixins.flexBetween};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 25px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.darkNavy};
  transition: ${theme.transition};
`;

const ProjectContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
  transition: ${theme.transition};

  &:hover,
  &:focus {
    ${ProjectInner} {
      transform: translateY(-5px);
      box-shadow: 0 2px 4px ${theme.colors.shadowNavy};
      box-shadow: 0 19px 38px ${theme.colors.darkestNavy} 0 15px 12px
        ${theme.colors.shadowNavy};
    }
  }
`;

const ProjectTop = styled.div`
  width: 100%;
`;

const ProjectBottom = styled.div``;

const ProjectHeader = styled.div`
  ${mixins.flexBetween};
  width: 100%;
  margin-bottom: 30px;
`;

const Folder = styled.div`
  color: ${theme.colors.teal};

  svg {
    width: 40px;
    height: 40px;
  }
`;

const Links = styled.div`
  margin-right: -10px;
`;

const IconLink = styled.a`
  padding: 10px;
  color: ${theme.colors.lightGrey};

  svg {
    width: 22px;
    height: 22px;
  }
`;

const ProjectName = styled.h2`
  margin: 0 0 10px;
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.lightestSlate};
`;

const ProjectLink = styled(Link)``;

const ProjectDescription = styled.div`
  font-size: 17px;
  line-height: 1.25;
  color: ${theme.colors.lightSlate};

  a {
    ${mixins.inlineLink};
  }
`;

const TechList = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 20px;

  li {
    margin-right: 15px;
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.slate};
    line-height: 2;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export default projectsArray =>
  projectsArray.map(
    ({ title, github, external, internal, description, tech }, i) => (
      <ProjectContainer key={i}>
        <ProjectInner>
          <ProjectTop>
            <ProjectHeader>
              <Folder>
                <FolderIcon />
              </Folder>
              <Links>
                {github && (
                  <IconLink
                    href={github}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="GitHub Link"
                  >
                    <GitHubIcon />
                  </IconLink>
                )}
                {external && (
                  <IconLink
                    href={external}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label="External Link"
                  >
                    <ExternalLinkIcon />
                  </IconLink>
                )}
              </Links>
            </ProjectHeader>
            <ProjectName>
              {internal ? (
                <ProjectLink to={internal}>{title}</ProjectLink>
              ) : (
                title
              )}
            </ProjectName>
            <ProjectDescription>{description}</ProjectDescription>
          </ProjectTop>
          <ProjectBottom>
            <TechList>
              {tech.map((techItem, i) => (
                <li key={i}>{techItem}</li>
              ))}
            </TechList>
          </ProjectBottom>
        </ProjectInner>
      </ProjectContainer>
    )
  );

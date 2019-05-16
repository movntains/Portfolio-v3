import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import { profileLinks, email } from '../config/config';

import theme from '../styles/theme';
import media from '../styles/media';
import GitHubIcon from './icons/GitHubIcon';
import CodePenIcon from './icons/CodePenIcon';
import MediumIcon from './icons/MediumIcon';
import EmailIcon from './icons/EmailIcon';

const ProfilesContainer = styled.aside`
  position: fixed;
  bottom: 0;
  left: 40px;
  width: 40px;
  color: ${theme.colors.lightSlate};
  ${media.desktop`left: 25px;`};
  ${media.tablet`display: none;`};
`;

const ProfileItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 150px;
    margin: 0 auto;
    background-color: ${theme.colors.lightSlate};
  }
`;

const ProfileItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;

const ProfileLink = styled.a`
  padding: 10px;

  svg {
    width: 18px;
    height: 18px;
    fill: ${theme.colors.lightSlate};
  }
`;

class Profiles extends Component {
  state = {
    isMounted: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 2000);
  }

  render() {
    const { isMounted } = this.state;

    return (
      <ProfilesContainer>
        <TransitionGroup>
          {isMounted && (
            <CSSTransition classNames="fade" timeout={3000}>
              <ProfileItemList>
                {profileLinks &&
                  profileLinks.map(({ url, name }, i) => (
                    <ProfileItem key={i}>
                      <ProfileLink
                        href={url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        aria-label={name}
                      >
                        {name === 'GitHub' ? <GitHubIcon /> : ''}
                        {name === 'CodePen' ? <CodePenIcon /> : ''}
                        {name === 'Medium' ? <MediumIcon /> : ''}
                      </ProfileLink>
                    </ProfileItem>
                  ))}
                <ProfileItem>
                  <ProfileLink href={`mailto:${email}`}>
                    <EmailIcon />
                  </ProfileLink>
                </ProfileItem>
              </ProfileItemList>
            </CSSTransition>
          )}
        </TransitionGroup>
      </ProfilesContainer>
    );
  }
}

export default Profiles;

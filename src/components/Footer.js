import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { profileLinks } from '../config/config';
import GitHubIcon from './icons/GitHubIcon';
import CodePenIcon from './icons/CodePenIcon';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import media from '../styles/media';

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  height: auto;
  padding: 15px;
  background-color: ${theme.colors.darkNavy};
  color: ${theme.colors.slate};
  text-align: center;
`;

const ProfilesContainer = styled.div`
  display: none;
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  color: ${theme.colors.lightSlate};
  ${media.tablet`display: block;`};
`;

const ProfileItemList = styled.ul`
  ${mixins.flexCenter};
`;

const ProfileItem = styled.li``;

const ProfileLink = styled.a`
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Copy = styled.div`
  ${mixins.flexCenter};
  margin: 5px auto;
`;

const AboutSiteLink = styled(Link)`
  color: ${theme.colors.slate};
  font-size: ${theme.fontSizes.small};
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <ProfilesContainer>
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
                    {name === 'GitHub' && <GitHubIcon />}
                    {name === 'CodePen' && <CodePenIcon />}
                  </ProfileLink>
                </ProfileItem>
              ))}
          </ProfileItemList>
        </ProfilesContainer>
        <Copy>
          <AboutSiteLink to="/about-this-site">About This Site</AboutSiteLink>
        </Copy>
      </FooterContainer>
    );
  }
}

export default Footer;

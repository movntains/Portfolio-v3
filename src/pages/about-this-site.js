import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';
import Heading from '../styles/Heading';
import SiteInfo from '../components/SiteInfo';

const AboutSiteContainer = styled(Section)`
  position: relative;
  min-height: 100vh;
`;

const SiteInfoList = styled.ul``;

class AboutSitePage extends Component {
  render() {
    return (
      <Layout>
        <Main>
          <AboutSiteContainer id="about-site">
            <Heading>About This Site</Heading>
            <SiteInfoList>
              <SiteInfo />
            </SiteInfoList>
          </AboutSiteContainer>
        </Main>
      </Layout>
    );
  }
}

export default AboutSitePage;

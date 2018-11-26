import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';
import Heading from '../styles/Heading';
import MinorHeading from '../styles/MinorHeading';
import Hobbies from '../components/Hobbies';
import BostonUniversity from '../components/education/BostonUniversity';
import UMDNJ from '../components/education/UMDNJ';
import RiderUniversity from '../components/education/RiderUniversity';

const AboutContainer = styled(Section)`
  position: relative;
`;

const HobbiesList = styled.ul`
  list-style: none;
`;

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Main>
          <AboutContainer
            ref={el => {
              this.about = el;
            }}
          >
            <Heading>About Me</Heading>
            <p>
              I'm a full-stack web developer who believes in clean, intuitive
              user interfaces and modular, DRY code. I have a Master of Science
              degree in Computer Information Systems with a concentration in
              security from Boston University.
            </p>
            <p>
              I'm highly detail-oriented and organized, and I'm also a fast
              learner. I'm constantly working to improve my skills, as well as
              to increase both the breadth and depth of my knowledge.
            </p>
            <MinorHeading>Interests</MinorHeading>
            <p>
              When I'm not coding, I can usually be found doing one of the
              following:
            </p>
            <HobbiesList>
              <Hobbies />
            </HobbiesList>
            <MinorHeading>Education</MinorHeading>
            <BostonUniversity />
            <UMDNJ />
            <RiderUniversity />
          </AboutContainer>
        </Main>
      </Layout>
    );
  }
}

export default AboutPage;

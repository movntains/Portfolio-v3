import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import theme from '../styles/theme';
import mixins from '../styles/mixins';
import media from '../styles/media';
import Section from '../styles/Section';

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
  ${media.tablet`padding-top: 150px; overflow-x: hidden;`};

  div {
    width: 100%;
  }
`;

const Intro = styled.h1`
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.large};
  font-weight: normal;
  color: ${theme.colors.teal};
  ${media.desktop`font-size: ${theme.fontSizes.medium};`};
  ${media.tablet`font-size: ${theme.fontSizes.medium};`};
`;

const Name = styled.h2`
  margin: 0;
  font-size: 80px;
  letter-spacing: 1px;
  line-height: 1.1;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

const Subtitle = styled.h3`
  font-size: 80px;
  letter-spacing: 1px;
  line-height: 1.1;
  color: ${theme.colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

const Blurb = styled.div`
  width: 50%;
  max-width: 500px;
  margin-top: 25px;
`;

class Hero extends Component {
  state = {
    isMounted: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 1000);
  }

  render() {
    const { isMounted } = this.state;

    const one = () => (
      <Intro style={{ transitionDelay: '100ms' }}>Hello, my name is</Intro>
    );

    const two = () => (
      <Name style={{ transitionDelay: '200ms' }}>Rachel Opperman.</Name>
    );

    const three = () => (
      <Subtitle style={{ transitionDelay: '300ms' }}>
        I'm a software developer.
      </Subtitle>
    );

    const four = () => (
      <Blurb style={{ transitionDelay: '400ms' }}>
        I build full-stack web applications with a focus on scalability,
        performance, clean user interfaces, and modular code.
      </Blurb>
    );

    const items = [one, two, three, four];

    return (
      <HeroContainer>
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </HeroContainer>
    );
  }
}

export default Hero;

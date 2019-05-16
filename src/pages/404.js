import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';
import media from '../styles/media';
import mixins from '../styles/mixins';
import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';

const Container = styled(Section)`
  position: relative;
  ${mixins.flexCenter};
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 5vw;
  line-height: 1;
  color: ${theme.colors.teal};
  text-transform: uppercase;
  ${media.tablet`font-size: 10vw;`};
`;

const Subtitle = styled.p``;

const NotFoundPage = () => (
  <Layout>
    <Main>
      <Container>
        <Title>Not Found</Title>
        <Subtitle>This page does not exist. Sorry about that.</Subtitle>
      </Container>
    </Main>
  </Layout>
);

export default NotFoundPage;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';
import Heading from '../styles/Heading';

const Container = styled(Section)`
  position: relative;
  min-height: 100vh;
`;

class ProjectInfoTemplate extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  render() {
    const { name, children } = this.props;

    return (
      <Layout>
        <Main>
          <Container>
            <Heading>{name}</Heading>
            {children}
          </Container>
        </Main>
      </Layout>
    );
  }
}

export default ProjectInfoTemplate;

import React, { Component } from 'react';

import Layout from '../components/Layout';
import Main from '../styles/Main';
import Hero from '../components/Hero';

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Main>
          <Hero />
        </Main>
      </Layout>
    );
  }
}

export default IndexPage;

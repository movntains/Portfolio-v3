import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../components/Layout';
import Main from '../../styles/Main';
import Projects from '../../components/Projects';

class ReactPage extends Component {
  static propTypes = {
    location: PropTypes.object
  };

  render() {
    const { location } = this.props;

    return (
      <Layout>
        <Main>
          <Projects location={location} />
        </Main>
      </Layout>
    );
  }
}

export default ReactPage;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Head from './Head';
import GlobalStyle from '../styles/GlobalStyle';
import Header from './Header';
import { nav } from '../config/config';
import Profiles from './Profiles';
import Footer from './Footer';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            site {
              siteMetadata {
                title
                siteUrl
                description
              }
            }
          }
        `}
        render={({ site }) => (
          <div id="root">
            <Head metadata={site.siteMetadata} />
            <GlobalStyle />
            <div className="container">
              <Header navLinks={nav} />
              <Profiles />
              {children}
              <Footer />
            </div>
          </div>
        )}
      />
    );
  }
}

export default Layout;

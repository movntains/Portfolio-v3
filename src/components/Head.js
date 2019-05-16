import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import config from '../config/config';
import favicon from '../../static/favicon.ico';

const Head = ({ metadata }) => (
  <Helmet>
    <html lang="en" />
    <title itemProp="name" lang="en">
      {metadata.title}
    </title>
    <meta name="description" content={metadata.description} />
    <meta name="theme-color" content={config.navyColor} />
    <link rel="icon" type="image/png" href={favicon} />
  </Helmet>
);

Head.propTypes = {
  metadata: PropTypes.object.isRequired
};

export default Head;

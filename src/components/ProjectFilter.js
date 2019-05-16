import React, { Component } from 'react';
import styled from 'styled-components';

import media from '../styles/media';
import FilterDropdown from './FilterDropdown';

const FilterContainer = styled.div`
  width: 15%;
  ${media.desktop`width: 100%; margin-bottom: 20px;`};
`;

class ProjectFilter extends Component {
  render() {
    return (
      <FilterContainer>
        <FilterDropdown />
      </FilterContainer>
    );
  }
}

export default ProjectFilter;

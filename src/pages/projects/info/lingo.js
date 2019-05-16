import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectInfoTemplate from '../../../templates/ProjectInfoTemplate';

const TechStackHeading = styled.h2``;

class Lingo extends Component {
  render() {
    return (
      <ProjectInfoTemplate name="Lingo">
        <TechStackHeading>Tech Stack:</TechStackHeading>
        <p>Test</p>
      </ProjectInfoTemplate>
    );
  }
}

export default Lingo;

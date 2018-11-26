import React, { Component } from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';
import Subheading from '../../styles/Subheading';

const EducationContainer = styled.div`
  margin-top: 50px;
`;

const DegreeInfoContainer = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid ${theme.colors.blueGrey};

  p {
    font-size: ${theme.fontSizes.medium};
    margin-bottom: 2px;
  }
`;

const CoursesContainer = styled.div`
  margin-top: 10px;

  p {
    font-size: ${theme.fontSizes.large};
  }
`;

const Degree = styled.p`
  margin-bottom: 3px;
  font-size: ${theme.fontSizes.large};
  font-style: italic;
  color: ${theme.colors.offWhite};
`;

class RiderUniversity extends Component {
  render() {
    return (
      <EducationContainer>
        <DegreeInfoContainer>
          <Subheading>Rider University</Subheading>
          <Degree>Bachelor of Science in Biology</Degree>
          <Degree>Minor in History</Degree>
          <p>September 2007 - May 2011</p>
          <p>GPA: 3.52</p>
        </DegreeInfoContainer>
        <CoursesContainer>
          <p>
            I was a member of the Baccalaureate Honors Program, and I was also
            honored as a Rider University Distinguished Scholar. Additionally, I
            made the Dean's list every semester but one. The program involved a
            variety of courses in biology, chemistry, physics, and mathematics,
            all of which trained me to logically approach problems and honed my
            analytical and critical thinking skills.
          </p>
        </CoursesContainer>
      </EducationContainer>
    );
  }
}

export default RiderUniversity;

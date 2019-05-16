import React, { Component } from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';
import Subheading from '../../styles/Subheading';
import UMDNJCourses from './UMDNJCourses';

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

const CoursesList = styled.ul`
  list-style: none;
`;

class UMDNJ extends Component {
  render() {
    return (
      <EducationContainer>
        <DegreeInfoContainer>
          <Subheading>
            University of Medicine & Dentistry of New Jersey
          </Subheading>
          <Degree>Master of Biomedical Science</Degree>
          <p>September 2011 - May 2013</p>
          <p>GPA: 3.90</p>
        </DegreeInfoContainer>
        <CoursesContainer>
          <p>
            This program involved completing 11 courses, which consisted of 4
            core courses and 7 electives. During my time in the program, I
            coordinated 4 graduate-level group projects and presentations. I
            also completed an independent study that involved composing a
            30-page report on cellular iron metabolism and its effects on
            neurodegenerative diseases. The courses were as follows:
          </p>
          <CoursesList>
            <UMDNJCourses />
          </CoursesList>
        </CoursesContainer>
      </EducationContainer>
    );
  }
}

export default UMDNJ;

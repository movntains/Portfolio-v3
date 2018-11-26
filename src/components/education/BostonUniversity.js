import React, { Component } from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';
import Subheading from '../../styles/Subheading';
import BUCourses from './BUCourses';

const EducationContainer = styled.div``;

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

class BostonUniversity extends Component {
  render() {
    return (
      <EducationContainer>
        <DegreeInfoContainer>
          <Subheading>Boston University</Subheading>
          <Degree>Master of Science in Computer Information Systems</Degree>
          <Degree>Concentration in Security</Degree>
          <p>September 2015 - September 2017</p>
          <p>GPA: 4.00</p>
        </DegreeInfoContainer>
        <CoursesContainer>
          <p>
            This program involved completing 11 courses in a condensed, 7-week
            format. The courses consisted of 1 pre-requisite course, 6 core
            courses, and 4 courses that were required for a concentration in
            security. The courses were as follows:
          </p>
          <CoursesList>
            <BUCourses />
          </CoursesList>
        </CoursesContainer>
      </EducationContainer>
    );
  }
}

export default BostonUniversity;

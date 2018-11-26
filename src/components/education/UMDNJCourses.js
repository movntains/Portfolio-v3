import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';
import media from '../../styles/media';

const UMDNJ_COURSES_ARRAY = [
  { name: 'Fundamentals of Biochemistry & Molecular Biology' },
  { name: 'Fundamentals of Cell Biology' },
  { name: 'Fundamentals of Systems Biology' },
  { name: 'Seminar in Biomedical Science' },
  { name: 'Principles of Pharmacology' },
  { name: 'Antimicrobial Drugs' },
  { name: 'Mechanisms of Disease' },
  { name: 'Microbiology' },
  { name: 'Laboratory Animal Science' },
  { name: 'Principles and Methods of Epidemiology' },
  { name: 'Independent Study' }
];

const CourseItem = styled.li`
  .icon {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    fill: ${theme.colors.teal};
  }

  .course {
    display: inline-block;
    margin-bottom: 5px;
    font-size: ${theme.fontSizes.large};
    color: ${theme.colors.lightSlate};
    ${media.phablet`font-size: ${theme.fontSizes.small}`};
    ${media.tiny`font-size: ${theme.fontSizes.xsmall}`};
  }
`;

const UMDNJCourses = () =>
  UMDNJ_COURSES_ARRAY.map(({ name }, i) => (
    <CourseItem key={i}>
      <svg
        className="icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
      </svg>
      <p className="course">{name}</p>
    </CourseItem>
  ));

export default UMDNJCourses;

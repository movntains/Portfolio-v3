import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';
import media from '../../styles/media';

const BU_COURSES_ARRAY = [
  { name: 'Fundamentals of Information Technology' },
  { name: 'Information Structures with Java' },
  { name: 'Quantitative Methods for Information Systems' },
  { name: 'Business Data Communication and Networks' },
  { name: 'Database Design and Implementation for Business' },
  { name: 'Information Systems Analysis and Design' },
  { name: 'IT Strategy and Management' },
  { name: 'IT Security Policies and Procedures' },
  { name: 'Enterprise Information Security' },
  { name: 'Network Security' },
  { name: 'Digital Forensics and Investigations' }
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

const BUCourses = () =>
  BU_COURSES_ARRAY.map(({ name }, i) => (
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

export default BUCourses;

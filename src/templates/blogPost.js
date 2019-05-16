import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../styles/theme';
import media from '../styles/media';
import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';
import LeftArrowIcon from '../components/icons/LeftArrowIcon';

const PostContainer = styled(Section)`
  position: relative;
  width: 80%;
  ${media.tablet`width: 100%;`};
`;

const BackBtn = styled(Link)`
  margin-bottom: 30px;
  font-size: ${theme.fontSizes.medium};
  font-weight: normal;
  color: ${theme.colors.lightSlate};

  &:hover {
    svg {
      fill: ${theme.colors.gold};
    }
  }

  svg {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    padding-bottom: 2px;
    fill: ${theme.colors.lightSlate};
  }
`;

const PostTitle = styled.h1`
  font-size: ${theme.fontSizes.h3};
  color: ${theme.colors.teal};
`;

const PostDate = styled.p`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.offWhite};
  text-transform: uppercase;
`;

const PostContent = styled.div`
  h2 {
    color: ${theme.colors.lightestSlate};
  }
`;

export default function PostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Main>
        <PostContainer>
          <BackBtn to="/blog/">
            <LeftArrowIcon />
            Back to Articles
          </BackBtn>
          <PostTitle>{frontmatter.title}</PostTitle>
          <PostDate>{frontmatter.date}</PostDate>
          <PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </PostContainer>
      </Main>
    </Layout>
  );
}

PostTemplate.propTypes = {
  data: PropTypes.object
};

export const postQuery = graphql`
  query BlogPostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

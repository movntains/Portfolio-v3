import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../styles/theme';
import media from '../styles/media';
import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';

const PostContainer = styled(Section)`
  position: relative;
`;

const BackBtn = styled(Link)`
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.darkGrey};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.offWhite};

  &:hover {
    background-color: ${theme.colors.lightGrey};
    color: ${theme.colors.offWhite};
  }
`;

const PostTitle = styled.h1`
  font-size: ${theme.fontSizes.h3};
  color: ${theme.colors.teal};
  ${media.desktop`order: 2; width: 100%;`};
`;

const PostDate = styled.p`
  font-size: ${theme.fontSizes.large};
  font-style: italic;
  color: ${theme.colors.offWhite};
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
          <BackBtn to="/blog/">Back to Index</BackBtn>
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

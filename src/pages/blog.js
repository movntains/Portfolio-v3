import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import theme from '../styles/theme';
import media from '../styles/media';
import mixins from '../styles/mixins';
import Layout from '../components/Layout';
import Main from '../styles/Main';
import Section from '../styles/Section';
import Heading from '../styles/Heading';
import RightArrowIcon from '../components/icons/RightArrowIcon';

const BlogContainer = styled(Section)`
  position: relative;
  min-height: 100vh;
`;

const IndexList = styled.ul`
  list-style: none;
`;

const BlogItem = styled.li`
  ${mixins.flexBetween};
  padding-bottom: 20px;
  border-bottom: 1px solid ${theme.colors.blueGrey};
  ${media.thone`
    flex-direction: column;
    justify-content: flex-start;
  `};
`;

const DateTitleContainer = styled.div`
  ${media.thone`width: 100%; margin-bottom: 15px;`};
`;

const BlogItemDate = styled.p`
  margin-bottom: 3px;
  font-size: ${theme.fontSizes.medium};
  text-transform: uppercase;
  color: ${theme.colors.lightSlate};
`;

const MediumLinkContainer = styled.div`
  ${media.thone`width: 100%;`};
`;

const ViewOnMediumBtn = styled.a`
  font-size: ${theme.fontSizes.medium};
  color: ${theme.colors.lightSlate};

  &:hover {
    svg {
      fill: ${theme.colors.gold};
    }
  }

  svg {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    padding-bottom: 2px;
    fill: ${theme.colors.lightSlate};
  }
`;

class BlogPage extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  render() {
    const { data } = this.props;

    return (
      <Layout>
        <Main>
          <BlogContainer>
            <Heading>Articles</Heading>
            <IndexList>
              {data.allMarkdownRemark.edges.map((post, i) => (
                <BlogItem key={i}>
                  <DateTitleContainer>
                    <BlogItemDate>{post.node.frontmatter.date}</BlogItemDate>
                    <Link key={post.node.id} to={post.node.frontmatter.path}>
                      {post.node.frontmatter.title}
                    </Link>
                  </DateTitleContainer>
                  <MediumLinkContainer>
                    <ViewOnMediumBtn
                      href={post.node.frontmatter.medium}
                      target="_blank"
                      rel="nofollower noopener noreferrer"
                    >
                      View on Medium
                      <RightArrowIcon />
                    </ViewOnMediumBtn>
                  </MediumLinkContainer>
                </BlogItem>
              ))}
            </IndexList>
          </BlogContainer>
        </Main>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            medium
            path
          }
        }
      }
    }
  }
`;

export default BlogPage;

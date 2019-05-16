import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import theme from '../styles/theme';
import media from '../styles/media';
import mixins from '../styles/mixins';

const Dropdown = styled.div`
  ${media.desktop`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `};
`;

const DropdownHeader = styled.div`
  display: none;
  ${media.desktop`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `};

  h2 {
    color: ${theme.colors.lightSlate};

    &:hover {
      color: ${theme.colors.offWhite};
    }
  }

  .icon {
    width: 40px;
    height: 40px;
    fill: ${theme.colors.lightSlate};

    &:hover {
      fill: ${theme.colors.offWhite};
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.desktop`
    height: 0;
    overflow: hidden;
  `};

  &.close {
    ${media.desktop`
      animation-name: ${mixins.slideUp}; animation-duration: 1s;
      animation-duration: 1s;
      animation-fill-mode: both;
    `};
  }

  &.open {
    ${media.desktop`
      animation-name: ${mixins.slideDown};
      animation-duration: 1s;
      animation-fill-mode: both;
    `};
  }
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`flex-direction: row;`};
`;

const AllProjectsFilter = styled.div`
  ${media.desktop`margin-top: 15px;`};
`;

const TechnologyFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DisciplineFilter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FilterHeading = styled.p`
  margin-top: 30px;
  margin-bottom: 5px;
  color: ${theme.colors.slate};
`;

const FilterLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
  color: ${theme.colors.lightestSlate};

  &.active {
    color: ${theme.colors.teal};
  }
`;

const TECHNOLOGY_LINKS = [
  { name: 'GraphQL', src: '/projects/graphQL/' },
  { name: 'MongoDB', src: '/projects/mongoDB/' },
  { name: 'Node.js', src: '/projects/node/' },
  { name: 'React', src: '/projects/react/' }
];

const DISCIPLINE_LINKS = [
  { name: 'Front-end', src: '/projects/front-end/' },
  { name: 'Full-stack', src: '/projects/full-stack/' }
];

class FilterDropdown extends Component {
  state = {
    isOpen: false,
    clicked: false
  };

  handleDropdown = () => {
    const { isOpen } = this.state;

    this.setState({ clicked: true });

    if (isOpen === true) {
      this.setState({ isOpen: false });
    } else {
      this.setState({ isOpen: true });
    }
  };

  toggleDropdownClass = (open, wasClicked) => {
    switch (true) {
      case wasClicked && open === true:
        return 'open';
      case wasClicked && open === false:
        return 'close';
      default:
    }
  };

  render() {
    const { isOpen, clicked } = this.state;

    return (
      <Dropdown onClick={this.handleDropdown}>
        <DropdownHeader>
          <h2>Filter Projects</h2>
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </DropdownHeader>
        <DropdownContainer
          className={this.toggleDropdownClass(isOpen, clicked)}
        >
          <AllProjectsFilter>
            <FilterLink to="/projects/" activeClassName="active">
              All Projects
            </FilterLink>
          </AllProjectsFilter>
          <Filters>
            <TechnologyFilter>
              <FilterHeading>Technology</FilterHeading>
              {TECHNOLOGY_LINKS.map(({ name, src }, i) => (
                <FilterLink key={i} to={src} activeClassName="active">
                  {name}
                </FilterLink>
              ))}
            </TechnologyFilter>
            <DisciplineFilter>
              <FilterHeading activeClassName="active">Discipline</FilterHeading>
              {DISCIPLINE_LINKS.map(({ name, src }, i) => (
                <FilterLink key={i} to={src} activeClassName="active">
                  {name}
                </FilterLink>
              ))}
            </DisciplineFilter>
          </Filters>
        </DropdownContainer>
      </Dropdown>
    );
  }
}

export default FilterDropdown;

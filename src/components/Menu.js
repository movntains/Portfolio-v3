import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import theme from '../styles/theme';
import mixins from '../styles/mixins';
import media from '../styles/media';
import Nav from '../styles/Nav';

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  outline: 0;
  transition: ${theme.transition};
  transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
  visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
  display: none;
  ${media.tablet`display: block;`};
`;

const Sidebar = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  position: relative;
  right: 0;
  width: 50vw;
  height: 100%;
  margin-left: auto;
  padding: 50px;
  background-color: ${theme.colors.darkNavy};
  box-shadow: -2px 0px 4px ${theme.colors.transNavy};
  ${media.thone`padding: 25px;`};
  ${media.phablet`width: 75vw;`};
  ${media.tiny`padding: 10px;`};
`;

const NavLinks = styled(Nav)`
  ${mixins.flexBetween};
  flex-direction: column;
  text-align: center;
`;

const NavList = styled.ul`
  width: 100%;
`;

const NavListItem = styled.li`
  position: relative;
  margin: 0 auto 20px;
  font-size: ${theme.fontSizes.large};
  ${media.thone`
    margin: 0 auto 10px;
    font-size: ${theme.fontSizes.medium};
  `};
  ${media.tiny`
    font-size: ${theme.fontSizes.smallish};
  `};

  a {
    &.active {
      color: ${theme.colors.teal};
      text-transform: uppercase;
    }
  }
`;

const NavLink = styled(Link)`
  ${mixins.link};
  width: 100%;
  padding: 3px 20px 20px;
  text-transform: uppercase;

  &:hover {
    color: ${theme.colors.gold};
  }

  &.active {
    color: ${theme.colors.teal};
  }
`;

class Menu extends Component {
  static propTypes = {
    menuOpen: PropTypes.bool.isRequired,
    navLinks: PropTypes.array.isRequired,
    handleMenuClick: PropTypes.func.isRequired
  };

  render() {
    const { menuOpen, navLinks, handleMenuClick } = this.props;
    const isActive = ({ isPartiallyCurrent }) =>
      isPartiallyCurrent ? { className: 'active' } : null;

    return (
      <MenuContainer
        menuOpen={menuOpen}
        onClick={handleMenuClick}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}
      >
        <Sidebar>
          <NavLinks>
            <NavList>
              {navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <NavListItem key={i}>
                    <NavLink
                      to={url}
                      activeClassName="active"
                      getProps={isActive}
                    >
                      {name}
                    </NavLink>
                  </NavListItem>
                ))}
            </NavList>
          </NavLinks>
        </Sidebar>
      </MenuContainer>
    );
  }
}

export default Menu;

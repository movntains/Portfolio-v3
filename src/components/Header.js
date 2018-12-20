import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Menu from './Menu';
import logo from '../images/logo.svg';
import theme from '../styles/theme';
import mixins from '../styles/mixins';
import media from '../styles/media';
import Nav from '../styles/Nav';
import throttle from '../utils/throttle';
import { headerHeight } from '../config/config';

// -----------------------------------
// ----- START STYLED COMPONENTS -----
// -----------------------------------

const HeaderContainer = styled.header`
  ${mixins.flexBetween};
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props =>
    props.scrollDirection === 'none'
      ? theme.headerHeight
      : theme.headerScrollHeight};
  z-index: 11;
  padding: 0px 50px;
  background-color: ${theme.colors.navy};
  opacity: ${props => (props.scrollDirection === 'down' ? '0.9' : '1.0')};
  box-shadow: ${props =>
    props.scrollDirection === 'down'
      ? `0 2px 4px ${theme.colors.shadowNavy}`
      : 'none'};
  transition: ${theme.transition};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  ${media.desktop`padding: 0 40px;`};
  ${media.tablet`padding: 0 25px;`};
`;

const Navbar = styled(Nav)`
  ${mixins.flexBetween};
  position: relative;
  z-index: 12;
  color: ${theme.colors.lightestSlate};
`;

const Logo = styled.div`
  ${mixins.flexCenter};
`;

const LogoLink = styled(Link)`
  width: 42px;
  height: 42px;
  color: ${theme.colors.teal};

  img {
    transition: ${theme.transition};
    user-select: none;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const Hamburger = styled.div`
  ${mixins.flexCenter};
  overflow: visible;
  margin: 0 -12px 0 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;
  display: none;
  ${media.tablet`display: flex;`};
`;

const HamburgerBox = styled.div`
  display: inline-block;
  position: relative;
  width: ${theme.hamburgerWidth}px;
  height: 24px;
`;

const HamburgerInner = styled.div`
  position: absolute;
  top: 20%;
  left: 0;
  right: 0;
  width: ${theme.hamburgerWidth}px;
  height: 2px;
  background-color: ${theme.colors.teal};
  border-radius: ${theme.borderRadius};
  transition-duration: 0.22s;
  transition-property: transform;
  transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
  transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
  transition-timing-function: cubic-bezier(
    ${props =>
      props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
  );

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0;
    width: ${theme.hamburgerWidth}px;
    height: 2px;
    background-color: ${theme.colors.teal};
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
    border-radius: 4px;
  }

  &:before {
    top: ${props => (props.menuOpen ? `0` : `-10px`)};
    width: ${props => (props.menuOpen ? `100%` : `120%`)};
    opacity: ${props => (props.menuOpen ? 0 : 1)};
    transition: ${props =>
      props.menuOpen ? theme.hamBeforeActive : theme.hamBefore};
  }

  &:after {
    bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
    width: ${props => (props.menuOpen ? `100%` : `80%`)};
    transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
    transition: ${props =>
      props.menuOpen ? theme.hamAfterActive : theme.hamAfter};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  ${media.tablet`display: none;`};
`;

const NavList = styled.ul`
  div {
    ${mixins.flexBetween};
  }
`;

const NavListItem = styled.li`
  position: relative;
  margin: 0 10px;
  font-size: ${theme.fontSizes.small};

  a {
    &.active {
      padding: 12px 10px;
      border-bottom: 1px solid ${theme.colors.teal};
      text-transform: uppercase;
    }
  }
`;

const NavLink = styled(Link)`
  padding: 12px 10px;
  text-transform: uppercase;

  &.active {
    padding: 12px 10px;
    border-bottom: 1px solid ${theme.colors.teal};
    text-transform: uppercase;
  }
`;

// ---------------------------------
// ----- END STYLED COMPONENTS -----
// ---------------------------------

const DELTA = 5;

class Header extends Component {
  static propTypes = {
    navLinks: PropTypes.array.isRequired
  };

  state = {
    lastScrollTop: 0,
    scrollDirection: 'none',
    menuOpen: false,
    isMounted: false
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }), 100);

    window.addEventListener('scroll', () => throttle(this.handleScroll()));
    window.addEventListener('resize', () => throttle(this.handleResize()));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
    window.removeEventListener('resize', () => this.handleResize());
  }

  handleScroll = () => {
    const { lastScrollTop, menuOpen, scrollDirection } = this.state;
    const fromTop = window.scrollY;

    // Make sure the user scrolls more than DELTA
    if (Math.abs(lastScrollTop - fromTop) <= DELTA || menuOpen) {
      return;
    }

    if (fromTop < DELTA) {
      this.setState({ scrollDirection: 'none' });
    } else if (fromTop > lastScrollTop && fromTop > headerHeight) {
      if (scrollDirection !== 'down') {
        this.setState({ scrollDirection: 'down' });
      }
    } else if (fromTop + window.innerHeight < document.body.scrollHeight) {
      if (scrollDirection !== 'up') {
        this.setState({ scrollDirection: 'up' });
      }
    }

    this.setState({ lastScrollTop: fromTop });
  };

  handleResize = () => {
    const { menuOpen } = this.state;

    if (window.innerWidth > 768 && menuOpen) {
      this.toggleMenu();
    }
  };

  toggleMenu = () => {
    const { menuOpen } = this.state;

    this.setState({ menuOpen: !menuOpen });
  };

  handleMenuClick = e => {
    const { target } = e;
    const isLink = target.hasAttribute('href');
    const isContainer =
      target.classList && target.classList[0].includes('MenuContainer');

    if (isLink || isContainer) {
      this.toggleMenu();
    }
  };

  render() {
    const { scrollDirection, menuOpen, isMounted } = this.state;
    const { navLinks } = this.props;
    const isActive = ({ isPartiallyCurrent }) =>
      isPartiallyCurrent ? { className: 'active' } : null;

    return (
      <HeaderContainer
        ref={el => {
          this.header = el;
          return el;
        }}
        scrollDirection={scrollDirection}
      >
        <Helmet>
          <body className={menuOpen ? 'blur' : ''} />
        </Helmet>
        <Navbar>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Logo>
                  <LogoLink to="/" aria-label="Home">
                    <img src={logo} alt="Logo" />
                  </LogoLink>
                </Logo>
              </CSSTransition>
            )}
          </TransitionGroup>
          <TransitionGroup>
            {isMounted && (
              <CSSTransition classNames="fade" timeout={3000}>
                <Hamburger onClick={this.toggleMenu}>
                  <HamburgerBox>
                    <HamburgerInner menuOpen={menuOpen} />
                  </HamburgerBox>
                </Hamburger>
              </CSSTransition>
            )}
          </TransitionGroup>
          <NavLinks>
            <NavList>
              <TransitionGroup>
                {isMounted &&
                  navLinks &&
                  navLinks.map(({ url, name }, i) => (
                    <CSSTransition key={i} classNames="fadedown" timeout={3000}>
                      <NavListItem
                        key={i}
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <NavLink
                          to={url}
                          activeClassName="active"
                          getProps={isActive}
                        >
                          {name}
                        </NavLink>
                      </NavListItem>
                    </CSSTransition>
                  ))}
              </TransitionGroup>
            </NavList>
          </NavLinks>
        </Navbar>
        {navLinks && (
          <Menu
            navLinks={navLinks}
            menuOpen={menuOpen}
            handleMenuClick={e => this.handleMenuClick(e)}
          />
        )}
      </HeaderContainer>
    );
  }
}

export default Header;

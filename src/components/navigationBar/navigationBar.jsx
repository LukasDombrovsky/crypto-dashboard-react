import React, { useEffect, useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

import classes from './navigationBar.module.scss';

// Navigation bar with color change when scrolled and fixed on top of page
const NavigationBar = (props) => {
  const [pageScrolled, setPageScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (pageScrolled !== show) {
        setPageScrolled(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [pageScrolled]);

  const links = props.links.map((link) => {
    if (link.type === 'redirect') {
      return (
        <NavLink
          key={link.name}
          className={classes['nav-link']}
          style={{
            color: pageScrolled
              ? props.colors.dynamic.textColor
              : props.colors.static.textColor,
          }}
          to={`/${link.name}`}
        >
          {link.name}
        </NavLink>
      );
    } else {
      return (
        <a
          key={link.name}
          className={classes['nav-link']}
          style={{
            color: pageScrolled
              ? props.colors.dynamic.textColor
              : props.colors.static.textColor,
          }}
          href={`#${link.name}`}
        >
          {link.name}
        </a>
      );
    }
  });

  return (
    <Navbar
      id='navbar'
      className={classes.navbar}
      variant={pageScrolled ? 'light' : 'dark'}
      expand='md'
      fixed='top'
      style={{
        backgroundColor: pageScrolled
          ? props.colors.dynamic.backgroundColor
          : props.colors.static.backgroundColor,
        minHeight: pageScrolled ? '50px' : '100px',
      }}
    >
      <Container>
        <Navbar.Brand
          className={classes['navbar-brand']}
          href={props.homeLink}
          style={{
            color: pageScrolled
              ? props.colors.dynamic.textColor
              : props.colors.static.textColor,
          }}
        >
          {props.brand}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse
          className={classes['navbar-collapse']}
          id='basic-navbar-nav'
        >
          <Nav>{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

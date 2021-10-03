import React, { useEffect, useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavHashLink } from "react-router-hash-link";

import classes from "./NavigationBar.module.scss";

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
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [pageScrolled]);

  const links = props.links.map((link) => (
    <NavHashLink
      key={link}
      className={classes["nav-link"]}
      style={{
        color: pageScrolled
          ? props.colors.dynamic.textColor
          : props.colors.static.textColor,
      }}
      activeStyle={{ color: "#18BC9C" }}
      to={`/${link}`}
    >
      {link}
    </NavHashLink>
  ));

  return (
    <Navbar
      id="navbar"
      className={classes.navbar}
      variant={pageScrolled ? "light" : "dark"}
      expand="md"
      fixed="top"
      style={{
        backgroundColor: pageScrolled
          ? props.colors.dynamic.backgroundColor
          : props.colors.static.backgroundColor,
        minHeight: pageScrolled ? "50px" : "100px",
      }}
    >
      <Container>
        <Navbar.Brand
          className={classes["navbar-brand"]}
          href={props.homeLink}
          style={{
            color: pageScrolled
              ? props.colors.dynamic.textColor
              : props.colors.static.textColor,
          }}
        >
          {props.brand}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className={classes["navbar-collapse"]}
          id="basic-navbar-nav"
        >
          <Nav>{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

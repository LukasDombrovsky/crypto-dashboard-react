import React, { useEffect, useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavHashLink } from "react-router-hash-link";

import classes from "./NavigationBar.module.scss";

const NavigationBar = (props) => {
  const [pageScrolled, setPageScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPageScrolled(window.scrollY > 50);
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
          ? props.colors.scrolled.textColor
          : props.colors.notScrolled.textColor,
      }}
      smooth
      activeStyle={{ color: props.activeTextColor }}
      to={`/${link === "contact" ? "#contact" : link}`}
    >
      {link}
    </NavHashLink>
  ));

  return (
    <Navbar
      className={classes.navbar}
      variant={pageScrolled ? "light" : "dark"}
      expand={props.expand}
      fixed="top"
      style={{
        backgroundColor: pageScrolled
          ? props.colors.scrolled.backgroundColor
          : props.colors.notScrolled.backgroundColor,
        borderBottom: pageScrolled
          ? props.colors.scrolled.borderBottom
          : props.colors.notScrolled.borderBottom,
        minHeight: pageScrolled ? "50px" : "100px",
      }}
    >
      <Container fluid={props.fluid}>
        <NavHashLink
          className={classes["nav-link"]}
          smooth
          to="/#"
          activeStyle={{ color: props.activeTextColor }}
        >
          <Navbar.Brand
            className={classes["navbar-brand"]}
            style={{
              color: pageScrolled
                ? props.colors.scrolled.textColor
                : props.colors.notScrolled.textColor,
            }}
          >
            {typeof props.brand === "string" &&
            (props.brand.includes("jpg") || props.brand.includes("png")) ? (
              <img src={props.brand} alt="Application logo" />
            ) : (
              props.brand
            )}
          </Navbar.Brand>
        </NavHashLink>
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

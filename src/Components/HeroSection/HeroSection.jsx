import React from "react";
import './HeroSection.css';

import { Container, Row, Col, Button } from 'react-bootstrap';
import NavigationBar from '../NavigationBar/NavigationBar.jsx';
import { Link } from 'react-scroll';

import White_Arrow from '../../Assets/Icons/arrow-204-512.png';

const HeroSection = (props) => {
  return (
    <div id="intro">
      {/* Navbar */}
      <Container className="navBar">
        <NavigationBar />
      </Container>

      {/* Hero Section */}
      <Container>
        <Row>

            <div id="welcome">
              <div id="header"> Hi, I'm Khoa </div>
              <div id="description"> Originally from Vietnam, I am currently working in New Zealand as a software developer. Specializing in Front End Development using ReactJS. </div>
              <Button variant="outline-light" id="cta_button">  <Link to="contact_section" spy={true} smooth={true}> Let's Talk! </Link> </Button>
            </div>

        </Row>
      </Container>
      <img
        src={White_Arrow}
        alt="white arrow"
        id="arrow"
      />
    </div>

  );

}

export default HeroSection;
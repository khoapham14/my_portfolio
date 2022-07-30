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
          <Col md={2}></Col>
          <Col md={8}>
            <div id="welcome">
              <p id="header"> Hi, I'm Khoa. </p>
              <hr id="divider" />
              <p id="description"> I grew up
                in Vietnam and moved to Auckland in 2014.
                I have recently finished my Bachelor's Degree &
                now I'm looking for internship opportunities. </p>
              <Button variant="outline-light" id="cta_button">  <Link to="contact_section" spy={true} smooth={true}> Let's Talk! </Link> </Button>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
      <img
        src={White_Arrow}
        height="5%"
        width="auto"
        alt="white arrow"
        id="arrow"
      />
    </div>

  );

}

export default HeroSection;
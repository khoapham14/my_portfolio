import React from 'react';
import './ContactSection.css';
import ContactForm from '../ContactForm/ContactForm';

import { Container, Row, Col } from 'react-bootstrap';

import Email from '../../Assets/Icons/email-256.png';
import Facebook from '../../Assets/Icons/facebook-4-256.png';
import Github from '../../Assets/Icons/github-9-256.png';
import LinkedIn from '../../Assets/Icons/linkedin-3-256.png';

const ContactSection = (props) => {
  return (
    <div id="contact_section">
      <p id="contact_header"> My Contact Details </p>
      <Container>
        <Row>
          <Col md={8} s={12} xs={12}>
            <Row>
            <Col md={4} style={{paddingRight:0, paddingLeft:0}}>
            <div id="contact_form_box"> 
              <p id="contact_form_header">Send a message</p>
              <p id="contact_form_subtext">All messages & feedback are much appreciated.</p>
            </div>
            </Col>
            <Col md={8} id="contact_form" style={{paddingRight:0, paddingLeft:0}}>
              <ContactForm />
            </Col>
            </Row>
          </Col>
          <Col md={4} id="media_links">
            <Row></Row>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactSection;

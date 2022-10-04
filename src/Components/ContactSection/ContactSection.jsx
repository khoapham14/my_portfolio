import React from 'react';
import './ContactSection.css';
import ContactForm from '../ContactForm/ContactForm';
import SectionHeader from '../SectionHeader/SectionHeader';

import { Container, Row, Col } from 'react-bootstrap';

import Email from '../../Assets/Icons/email-256.png'; 
import Github from '../../Assets/Icons/github-9-256.png';
import LinkedIn from '../../Assets/Icons/linkedin-3-256.png';

const ContactSection = (props) => {
  return (
    <div id="contact_section">
      <SectionHeader sectionTitle="Contact" sectionDescription="All the ways you can reach me." />
      <Container id="contact_form_container">
      <Row style={{paddingRight:0, paddingLeft:0, width: '85%'}}>
            <Col md={4} style={{paddingRight:0, paddingLeft:0}}>
            <div id="contact_form_box"> 
              <p id="contact_form_header">Send me a message</p>
              <p id="contact_form_subtext">All messages & feedback are much appreciated.</p>
              <div id="contact_icons_container">              
                {/* <img src={Email} alt="Email" id="contact_icons" /> */}
                <a href="https://github.com/khoapham14" target="_blank"> <img src={Github} alt="Github" id="contact_icons" /> </a>
                <a href="https://www.linkedin.com/in/khoa-pham-9773261ba/" target="_blank"><img src={LinkedIn} alt="LinkedIn" id="contact_icons" /></a>
              </div>
            </div>
            </Col>
            <Col md={8} id="contact_form" style={{paddingRight:0, paddingLeft:0}}>
              <ContactForm />
            </Col>
            </Row>
      </Container>
    </div>
  );
}

export default ContactSection;

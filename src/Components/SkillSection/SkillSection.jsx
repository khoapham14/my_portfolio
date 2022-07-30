import { Navbar, Nav, Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './SkillSection.css';
import { Link } from 'react-scroll';
import React from "react";

// Images, Icons and Logos
import Skill_FrontEnd from '../../Assets/Icons/Skill_FrontEnd.svg';
import Skill_PC from '../../Assets/Icons/Skill_PC.svg';
import Skill_Java from '../../Assets/Icons/Skill_Java.svg';
import Skill_C from '../../Assets/Icons/Skill_C.svg';
import Skill_Comms from '../../Assets/Icons/Skill_Comms.svg';
import Skill_BackEnd from '../../Assets/Icons/Skill_BackEnd.svg';


const SkillSection = (props) => {
  return (
    <div id="skills_section">
      <p id="skills_header"> My Skills </p>
      <p id="skills_sub_header"> and how I got them </p>
      <Container id="skills">
        <Row>
          <Col xs={4} md={4}>
            <img
              src={Skill_FrontEnd}
              height="auto"
              width="55%"
              alt="Web Dev Front End"
              className="d-inline-block align-top"
            />
            <p id="skill_name"> Web Dev</p>
            <p id="skill_desc"> Learnt HTML, Javascript, CSS during Year 12 & 13.
              Learnt Bootstrap and ReactJS for University Projects. </p>
          </Col>
          <Col xs={4} md={4}>

            <img
              src={Skill_PC}
              height="auto"
              width="55%"
              alt="Khoa's Logo"
              className="d-inline-block align-top"
            />
            <p id="skill_name"> PC Building </p>
            <p id="skill_desc"> Stemmed from my interest in gaming, I learnt computer
              assembly from Youtube & ICE Courses at Techtorium. </p>

          </Col>
          <Col xs={4} md={4}>
            <img
              src={Skill_Java}
              height="auto"
              width="55%"
              alt="Khoa's Logo"
              className="d-inline-block align-top"
            />
            <p id="skill_name"> Java</p>
            <p id="skill_desc"> Learnt and used Java for most of the papers at AUT.
              It introduced me to Object-Oriented Programming. </p>
          </Col>
        </Row>

        <Row>

          <Col xs={4} md={4}>
            <img
              src={Skill_C}
              height="auto"
              width="55%"
              alt="Khoa's Logo"
              className="d-inline-block align-top"
            />

            <p id="skill_name"> C</p>
            <p id="skill_desc"> Learnt C during my first year at AUT. While I did not
              get much practice, C was a great intro to programming.  </p>
          </Col>

          <Col xs={4} md={4}>
            <img
              src={Skill_BackEnd}
              height="auto"
              width="55%"
              alt="Khoa's Logo"
              className="d-inline-block align-top"
            />

            <p id="skill_name"> Back-end</p>
            <p id="skill_desc"> I learnt a bit of PHP and SQL at AUT.
              I then learnt AWS and Node.js on my own.  </p>
          </Col>
          <Col xs={4} md={4}>
            <img
              src={Skill_Comms}
              height="auto"
              width="55%"
              alt="Khoa's Logo"
              className="d-inline-block align-top"
            />
            <p id="skill_name"> Teamwork </p>
            <p id="skill_desc"> Most projects at AUT were done in groups, allowing me
              to learn how to work with others. </p>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default SkillSection;
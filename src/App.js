// Style sheets and react-bootstrap components
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import './App.css';

// Images, Icons and Logos
import Logo from './Assets/Icons/Logo_White.svg';
import Skill_FrontEnd from './Assets/Icons/Skill_FrontEnd.svg';
import Skill_PC from './Assets/Icons/Skill_PC.svg';
import Skill_Java from './Assets/Icons/Skill_Java.svg';
import Skill_C from './Assets/Icons/Skill_C.svg';
import Skill_BackEnd from './Assets/Icons/Skill_BackEnd.svg';
import Skill_Comms from './Assets/Icons/Skill_Comms.svg';
import White_Arrow from './Assets/Icons/arrow-204-512.png';



function App() {
  return (
    <div>
      <div id="intro">
        {/* Navbar */}
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand>
              <img
                src={Logo}
                height="80px"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="mr-auto justify-content-end">
                <Nav.Link href="#home">My Skills</Nav.Link>
                <Nav.Link href="#link">My Contact Details</Nav.Link>
                <Nav.Link href="#link">My Projects</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        {/* Header Section */}
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <div id="welcome">
                <p id="header"> Welcome to my website! </p>
                <hr id="divider" />
                <p id="description"> My name is Khoa (or Cody). Grew up 
                          in Vietnam but moved to Auckland in 2014. 
                          Recently finished my Bachelor's Degree  
                          in Computer & Information Sciences at AUT. 
                          Currently looking for work & internship opportunities. </p>
                <Button variant="outline-light" id="cta_button"> Let's Talk! </Button>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
        <img
          src={White_Arrow}
          height="50vw"
          width="auto"
          alt="white arrow"
          id="arrow"
        />
      </div>

      {/* Skills Section */}
      <div id="about_section">
        <p id="about_header"> My Skills </p>
        <p id="about_sub_header"> and how I got them </p>
        <Container id="skills">
          <Row>
            <Col xs={4} md={4}>
              <img
                src={Skill_FrontEnd}
                height="200em"
                width="auto"
                alt="Web Dev Front End"
                className="d-inline-block align-top"
              />
              <p id="skill_name"> Front-end Web Dev</p>
              <p id="skill_desc"> Learnt HTML, Javascript, CSS during Year 12 & 13.
                                  Learnt Bootstrap and ReactJS for University Projects. </p>


              <img
                src={Skill_C}
                height="200em"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />

              <p id="skill_name"> C Programming </p>
              <p id="skill_desc"> Learnt C during my first year at AUT. While I did not
                                  get much practice, C was a great intro to programming.  </p>

            </Col>
            <Col xs={4} md={4}>

              <img
                src={Skill_PC}
                height="200em"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />
              <p id="skill_name"> PC Building </p>
              <p id="skill_desc"> Stemmed from my interest in gaming, I learnt basic PC
                                  assembly from Youtube & ICE Courses at Techtorium. </p>


              <img
                src={Skill_BackEnd}
                height="200em"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />
              <p id="skill_name"> Back-end Development </p>
              <p id="skill_desc"> Learnt PHP, SQL during my second and third year at AUT.
                                  I then learnt Firebase, AWS and Heroku from Udemy. </p>

            </Col>
            <Col xs={4} md={4}>
              <img
                src={Skill_Java}
                height="200em"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />
              <p id="skill_name"> Java Programming </p>
              <p id="skill_desc"> Learnt and used Java for most of the papers at AUT.
                                  It introduced me to Object-Oriented Programming. </p>


              <img
                src={Skill_Comms}
                height="200em"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />
              <p id="skill_name"> Cooperation </p>
              <p id="skill_desc"> Most projects at AUT were done in groups, allowing me
                                  to learn how to work with others. </p>

            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact Section */}
      <div id="contact_section">
        <p id="contact_header"> My Contact Details </p>
        <Container>
          <Row>    
            <Col md={6}>
            <p id="contact_sub_header"> Send me a message here</p>
            {/* TODO: Messaging Form */}
            </Col>
            <Col md={6}>
            <p id="contact_sub_header"> Or contact me via these platforms</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Projects Section */}
      <div id="projects_section">

      </div>


      {/* Footer Section */}
      <div id="footer">

      </div>
    </div>

  );
}

export default App;

import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Logo from './Assets/Icons/Logo_White.svg';
import Skill_FrontEnd from './Assets/Icons/Skill_FrontEnd.svg';
import Skill_PC from './Assets/Icons/Skill_PC.svg';
import Skill_Java from './Assets/Icons/Skill_Java.svg';
import Skill_C from './Assets/Icons/Skill_C.svg';
import Skill_BackEnd from './Assets/Icons/Skill_BackEnd.svg';
import Skill_Comms from './Assets/Icons/Skill_Comms.svg';
import './App.css';

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
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">My Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      {/* Header Section */}
      <Container>
        <Row>
          <Col xs={4} md={6}>
            <div id="welcome">
              <p id="header"> Welcome to my website! </p>
              <p id="description"> My name is Khoa (or Cody). I grew up in <br />
                          Vietnam but moved to Auckland in 2014.  <br />
                          I have recently finished my Bachelor's <br />
                          Degree at AUT and currently looking for <br />
                          work opportunities. </p>
            </div>
          </Col>
          <Col xs={4} md={6}>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={require('./Assets/Icons/arrow-204-512.png')}
              height="50vw"
              width="auto"
              alt="white arrow"
              id="arrow"
            />
          </Col>
        </Row>
      </Container>
      </div>
      {/* About Section */}
      <div id="about-section">
        <p id="about-header"> About me </p>
        <p id="about-sub-header"> and what I can do </p>
        <Container id="skills">
          <Row>
            <Col xs={4} md={4}>
              <img
                src={Skill_FrontEnd}
                height="35%"
                width="auto"
                alt="Web Dev Front End"
                className="d-inline-block align-top"
              />

              <p id="skill_desc"> Learnt HTML, Javascript, CSS during Year 12 & 13. <br />
                                  Learnt Bootstrap and ReactJS for University Projects. <br />
                                  Learnt Vectr and InVision studio in my spare time. </p>


              <img
                src={Skill_C}
                height="35%"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />

              <p id="skill_desc"> Abc </p>

            </Col>
            <Col xs={4} md={4}>

              <img
                src={Skill_PC}
                height="35%"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />

              <p id="skill_desc"> Abc </p>


              <img
                src={Skill_BackEnd}
                height="35%"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />

              <p id="skill_desc"> Abc </p>
            </Col>
            <Col xs={4} md={4}>
              <img
                src={Skill_Java}
                height="35%"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />

              <p id="skill_desc"> Abc </p>


              <img
                src={Skill_Comms}
                height="35%"
                width="auto"
                alt="Khoa's Logo"
                className="d-inline-block align-top"
              />

              <p id="skill_desc"> Abc </p>

            </Col>
          </Row>
        </Container>

      </div>
    </div>

  );
}

export default App;

// Required imports from packages & stylesheets.
import { Navbar, Nav, Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-scroll';
import React from "react";

// Images, Icons and Logos
import Logo from './Assets/Icons/Logo_White.svg';
import Skill_FrontEnd from './Assets/Icons/Skill_FrontEnd.svg';
import Skill_PC from './Assets/Icons/Skill_PC.svg';
import Skill_Java from './Assets/Icons/Skill_Java.svg';
import Skill_C from './Assets/Icons/Skill_C.svg';
import Skill_Comms from './Assets/Icons/Skill_Comms.svg';
import Skill_BackEnd from './Assets/Icons/Skill_BackEnd.svg';
import White_Arrow from './Assets/Icons/arrow-204-512.png';
import Email from './Assets/Icons/email-256.png';
import Facebook from './Assets/Icons/facebook-4-256.png';
import Github from './Assets/Icons/github-9-256.png';
import LinkedIn from './Assets/Icons/linkedin-3-256.png';
import WAU_Card from './Assets/Projects/We_Are_Us_Card.png';
import Simp_Card from './Assets/Projects/SimpliCT.png';
import DHF_Card from './Assets/Projects/DHF_Card.png';
import SEER_Card from './Assets/Projects/SEER.png';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
      width: window.innerWidth,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll(event) {
    const scroll_pos = document.body.scrollTop;
    if (scroll_pos > 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 770;
    const isTablet = width > 770 && width <= 1000;
    if (isMobile) {
      return (

        <div>
          <div id="intro">
            {/* Navbar */}
            <Container className="navBar">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" className="justify-content-end" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="mr-auto justify-content-end">
                    <Nav.Link ><Link to="skills_section" spy={true} smooth={true} id="nav-link"> My Skills </Link></Nav.Link>
                    <Nav.Link > <Link to="contact_section" spy={true} smooth={true} id="nav-link"> Contact Me </Link></Nav.Link>
                    <Nav.Link > <Link to="projects_section" spy={true} smooth={true} id="nav-link"> My Projects </Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>

            {/* Header Section */}
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

          {/* Skills Section */}
          <div id="skills_section">
            <p id="skills_header"> My Skills </p>
            <p id="skills_sub_header"> and how I got them </p>
            <Container id="skills">
              <Row>
                <Col xs={6} md={6}>
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
                <Col xs={6} md={6}>

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
              </Row>
              <Row>
                <Col xs={6} md={6}>
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




                <Col xs={6} md={6}>
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

              </Row>
              <Row>

                <Col xs={6} md={6}>
                  <img
                    src={Skill_BackEnd}
                    height="auto"
                    width="55%"
                    alt="Khoa's Logo"
                    className="d-inline-block align-top"
                  />

                  <p id="skill_name"> Back-end</p>
                  <p id="skill_desc"> I learnt a bit of PHP and SQL at AUT.
                    I then learnt Firebase and Node.js on Udemy.  </p>
                </Col>
                <Col xs={6} md={6}>
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

          {/* Contact Section */}
          <div id="contact_section">
            <p id="contact_header"> My Contact Details </p>
            <Container>
              <Row>
                <Col id="media_links">
                  <p id="contact_sub_header"> Find me on these platforms: </p>
                  <Row>
                    <img
                      src={Email}
                      height="40em"
                      width="auto"
                      alt="Mail Logo"
                      className="contact_icons"
                    />

                    <img
                      src={Facebook}
                      height="40em"
                      width="auto"
                      alt="Mail Logo"
                      className="contact_icons"
                    />

                    <img
                      src={Github}
                      height="40em"
                      width="auto"
                      alt="Mail Logo"
                      className="contact_icons"
                    />

                    <img
                      src={LinkedIn}
                      height="40em"
                      width="auto"
                      alt="Mail Logo"
                      className="contact_icons"
                    />
                  </Row>
                  <p id="contact_sub_header"> Send me a message here: </p>
                  <Col md={10} id="contact_form">
                    <Form>
                      <Form.Group controlId="formName">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label> Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                      </Form.Group>
                      <Form.Group controlId="formMessage">
                        <Form.Label> Message: </Form.Label>
                        <Form.Control as="textarea" type="message" rows={3} placeholder="Enter your message" />
                      </Form.Group>
                      <Button variant="outline-light"> Submit </Button>
                    </Form>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Projects Section */}
          <div id="projects_section">
            <p id="projects_header"> My Projects </p>
            <Container>
              <Row>
                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={WAU_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> We Are Us Website </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, Bootstrap, NodeJS, AWS, Strapi CMS, Google Maps & Geocoding, and many more. </Card.Subtitle>
                    <Card.Text> We Are Us is a platform similar to Airbnb but
                    dedicated to health, wellness & self-improvement businesses.
                      </Card.Text>
                    <Button variant="primary" id="project_button"> See Project </Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={Simp_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> SimpliCT </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">   </Card.Subtitle>
                    <Card.Text> A Rubik's cube timer with a standard scrambler and basic stats tracking.
                      </Card.Text>
                    <Button variant="primary" id="project_button"> See Project </Button>
                  </Card.Body>
                </Card>




                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={DHF_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> Dad's Home Foundation </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, NodeJS, AWS, Strapi CMS, and many more. </Card.Subtitle>
                    <Card.Text> An MVP for a non-profit fundraising organisation.
                      </Card.Text>
                    <Button variant="primary" id="project_button"> See Project </Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={SEER_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> SEER Website </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, Heroku. </Card.Subtitle>
                    <Card.Text> A third year project for a repository strictly for Software Engineering related studies/researches/articles. Based largely on ScienceDirect.
                      </Card.Text>
                    <Button variant="primary" id="project_button"> See Project </Button>
                  </Card.Body>
                </Card>

              </Row>
            </Container>

          </div>


          {/* Footer Section */}
          <div id="footer">

            <Container>
              <Row>
                <img
                  src={Logo}
                  height="50px"
                  width="auto"
                  alt="Khoa's Logo"
                  className="d-inline-block align-top"
                  id="footer_logo"
                />
              </Row>
              <Row>
                <Col md={4}>
                  <p id="footer_header"> Credits </p>
                  <p><a id="footer_desc" href="http://www.freepik.com"> Iceberg Illustration by pikisuperstar</a></p>
                  <p><a id="footer_desc" href="http://www.freepik.com"> Underwater Illustration by macrovector</a></p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> For employers </p>
                  <p><a id="footer_desc" href="https://docs.google.com/document/d/15-zNXyYNb5HW8aOzQFOw4jzlYUGow4FcUdzRTf-JeGg/edit?usp=sharing">  My CV/Resume</a></p>
                  <p id="footer_desc"> My Working Visa</p>
                </Col>

                <Col md={4}>
                  <p id="footer_header">  And finally...</p>
                  <p id="footer_desc"> Thank you for visiting my website. Have a nice rest of your day!</p>
                </Col>
              </Row>

            </Container>
          </div>
        </div>


      );

    }
    else if (isTablet) {
      return (
        <div>
          <div id="intro">
            {/* Navbar */}
            <Container className="navBar">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" className="justify-content-end" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="mr-auto justify-content-end">
                    <Nav.Link ><Link to="skills_section" spy={true} smooth={true} id="nav-link"> My Skills </Link></Nav.Link>
                    <Nav.Link > <Link to="contact_section" spy={true} smooth={true} id="nav-link"> Contact Me </Link></Nav.Link>
                    <Nav.Link > <Link to="projects_section" spy={true} smooth={true} id="nav-link"> My Projects </Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>

            {/* Header Section */}
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

          {/* Skills Section */}
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
                  I then learnt Firebase and Node.js on Udemy.  </p>
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

          {/* Contact Section */}
          <div id="contact_section">
            <p id="contact_header"> My Contact Details </p>
            <Container>
              <Row>
                <Col id="media_links">
                  <p id="contact_sub_header"> Find me on these platforms: </p>
                  <Row>
                    <img
                      src={Email}
                      height="40em"
                      width="auto"
                      alt="Mail Logo"
                      className="contact_icons"
                    />

                    <img
                      src={Facebook}
                      height="40em"
                      width="auto"
                      alt="Mail Logo"
                      className="contact_icons"
                    />

                    <img
                      src={Github}
                      height="40em"
                      width="auto"
                      alt="Mail Logo"
                      className="contact_icons"
                    />

                    <img
                      src={LinkedIn}
                      height="40em"
                      width="auto"
                      alt="Mail Logo"
                      className="contact_icons"
                    />
                  </Row>
                  <p id="contact_sub_header"> Send me a message here: </p>
                  <Col md={10} id="contact_form">
                    <Form>
                      <Form.Group controlId="formName">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label> Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                      </Form.Group>
                      <Form.Group controlId="formMessage">
                        <Form.Label> Message: </Form.Label>
                        <Form.Control as="textarea" type="message" rows={3} placeholder="Enter your message" />
                      </Form.Group>
                      <Button variant="outline-light"> Submit </Button>
                    </Form>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Projects Section */}
          <div id="projects_section">
            <p id="projects_header"> My Projects </p>
            <Container>
              <Row>
                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={WAU_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> We Are Us Website </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, Bootstrap, NodeJS, AWS, Strapi CMS, Google Maps & Geocoding, and many more. </Card.Subtitle>
                    <Card.Text> We Are Us is a platform similar to Airbnb but
                    dedicated to health, wellness & self-improvement businesses.
                    </Card.Text>
                    <Button variant="primary" id="project_button"> See Project </Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={Simp_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> SimpliCT </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">   </Card.Subtitle>
                    <Card.Text> A Rubik's cube timer with a standard scrambler and basic stats tracking.
                    </Card.Text>
                    <Button variant="primary" id="project_button"> See Project </Button>
                  </Card.Body>
                </Card>




                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={DHF_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> Dad's Home Foundation </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, NodeJS, AWS, Strapi CMS, and many more. </Card.Subtitle>
                    <Card.Text> An MVP for a non-profit fundraising organisation.
                    </Card.Text>
                    <Button variant="primary" id="project_button"> See Project </Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={SEER_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> SEER Website </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, Heroku. </Card.Subtitle>
                    <Card.Text> A third year project for a repository strictly for Software Engineering related studies/researches/articles. Based largely on ScienceDirect.
                    </Card.Text>
                    <Button variant="primary" id="project_button"> See Project </Button>
                  </Card.Body>
                </Card>

              </Row>
            </Container>

          </div>


          {/* Footer Section */}
          <div id="footer">

            <Container>
              <Row>
                <img
                  src={Logo}
                  height="50px"
                  width="auto"
                  alt="Khoa's Logo"
                  className="d-inline-block align-top"
                  id="footer_logo"
                />
              </Row>
              <Row>
                <Col md={4}>
                  <p id="footer_header"> Credits </p>
                  <p><a id="footer_desc" href="http://www.freepik.com"> Iceberg Illustration by pikisuperstar</a></p>
                  <p><a id="footer_desc" href="http://www.freepik.com"> Underwater Illustration by macrovector</a></p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> For employers </p>
                  <p><a id="footer_desc" href="https://docs.google.com/document/d/15-zNXyYNb5HW8aOzQFOw4jzlYUGow4FcUdzRTf-JeGg/edit?usp=sharing">  My CV/Resume</a></p>
                  <p id="footer_desc"> My Working Visa</p>
                </Col>

                <Col md={4}>
                  <p id="footer_header">  And finally...</p>
                  <p id="footer_desc"> Thank you for visiting my website. Have a nice rest of your day!</p>
                </Col>
              </Row>

            </Container>
          </div>
        </div>

      );
    }
    else {
      return (
        <div>
          <div id="intro">
            {/* Navbar */}
            <Container className="navBar">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" className="justify-content-end" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="mr-auto justify-content-end">
                    <Nav.Link ><Link to="skills_section" spy={true} smooth={true} id="nav-link"> My Skills </Link></Nav.Link>
                    <Nav.Link > <Link to="contact_section" spy={true} smooth={true} id="nav-link"> Contact Me </Link></Nav.Link>
                    <Nav.Link > <Link to="projects_section" spy={true} smooth={true} id="nav-link"> My Projects </Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>

            {/* Header Section */}
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

          {/* Skills Section */}
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
                <Col xd={4} md={4}>
                  <img
                    src={Skill_BackEnd}
                    height="auto"
                    width="55%"
                    alt="Khoa's Logo"
                    className="d-inline-block align-top"
                  />

                  <p id="skill_name"> Back-end</p>
                  <p id="skill_desc"> I learnt a bit of PHP and SQL at AUT.
                  I then learnt Firebase and Node.js on Udemy.  </p>

                </Col>
                <Col xd={4} md={4}>
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
                <Col xd={4} md={4}>
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

          {/* Contact Section */}
          <div id="contact_section">
            <p id="contact_header"> My Contact Details </p>
            <Container>
              <Row>
                <Col md={6} id="media_links">
                  <p id="contact_sub_header"> Find me on these platforms: </p>
                  <Row>
                    <Col md={2}></Col>
                    <Col md={2}>
                      <img
                        src={Email}
                        height="40em"
                        width="auto"
                        alt="Mail Logo"
                        className="contact_icons"
                      />

                      <img
                        src={Facebook}
                        height="40em"
                        width="auto"
                        alt="Mail Logo"
                        className="contact_icons"
                      />

                      <img
                        src={Github}
                        height="40em"
                        width="auto"
                        alt="Mail Logo"
                        className="contact_icons"
                      />

                      <img
                        src={LinkedIn}
                        height="40em"
                        width="auto"
                        alt="Mail Logo"
                        className="contact_icons"
                      />
                    </Col>
                    <Col md={6}>
                      <p id="contact_text"> cody.pham14@gmail.com </p>
                      <p id="contact_text"> Pham Anh Khoa </p>
                      <p id="contact_text"> asianlanlord </p>
                      <p id="contact_text"> Khoa Pham </p>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <p id="contact_sub_header"> Send me a message here: </p>
                  <Col md={10} id="contact_form">
                    <Form>
                      <Form.Group controlId="formName">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label> Email: </Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                      </Form.Group>
                      <Form.Group controlId="formMessage">
                        <Form.Label> Message: </Form.Label>
                        <Form.Control as="textarea" type="message" rows={3} placeholder="Enter your message" />
                      </Form.Group>
                      <Button variant="outline-light"> Submit </Button>
                    </Form>
                  </Col>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Projects Section */}
          <div id="projects_section">
            <p id="projects_header"> My Projects </p>
            <Container>
              <Row>
                <Col md={6}>
                  <Card style={{ width: '65%' }}>
                    <Card.Img variant="top" src={WAU_Card} width="100%" height="auto" />
                    <Card.Body>
                      <Card.Title> We Are Us Website </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">  ReactJS, Bootstrap, NodeJS, AWS, Strapi CMS, Google Maps & Geocoding, and many more. </Card.Subtitle>
                      <Card.Text> We Are Us is a platform similar to Airbnb but
                      dedicated to health, wellness & self-improvement businesses.
                    </Card.Text>
                      <Button variant="primary" id="project_button"> See Project </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={{ width: '65%' }}>
                    <Card.Img variant="top" src={Simp_Card} width="100%" height="auto" />
                    <Card.Body>
                      <Card.Title> SimpliCT </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">   </Card.Subtitle>
                      <Card.Text> A Rubik's cube timer with a standard scrambler and basic stats tracking.
                    </Card.Text>
                      <Button variant="primary" id="project_button"> See Project </Button>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>

              <Row>
                <Col md={6}>
                  <Card style={{ width: '65%' }}>
                    <Card.Img variant="top" src={DHF_Card} width="100%" height="auto" />
                    <Card.Body>
                      <Card.Title> Dad's Home Foundation </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, NodeJS, AWS, Strapi CMS, and many more. </Card.Subtitle>
                      <Card.Text> An MVP for a non-profit fundraising organisation.
                    </Card.Text>
                      <Button variant="primary" id="project_button"> See Project </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={{ width: '65%' }}>
                    <Card.Img variant="top" src={SEER_Card} width="100%" height="auto" />
                    <Card.Body>
                      <Card.Title> SEER Website </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, Heroku. </Card.Subtitle>
                      <Card.Text> A third year project for a repository strictly for Software Engineering related studies/researches/articles. Based largely on ScienceDirect.
                    </Card.Text>
                      <Button variant="primary" id="project_button"> See Project </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>

          </div>


          {/* Footer Section */}
          <div id="footer">

            <Container>
              <Row>
                <img
                  src={Logo}
                  height="50px"
                  width="auto"
                  alt="Khoa's Logo"
                  className="d-inline-block align-top"
                  id="footer_logo"
                />
              </Row>
              <Row>
                <Col md={4}>
                  <p id="footer_header"> Credits </p>
                  <p><a id="footer_desc" href="http://www.freepik.com"> Iceberg Illustration by pikisuperstar</a></p>
                  <p><a id="footer_desc" href="http://www.freepik.com"> Underwater Illustration by macrovector</a></p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> For employers </p>
                  <p><a id="footer_desc" href="https://docs.google.com/document/d/15-zNXyYNb5HW8aOzQFOw4jzlYUGow4FcUdzRTf-JeGg/edit?usp=sharing">  My CV/Resume</a></p>
                  <p id="footer_desc"> My Working Visa</p>
                </Col>

                <Col md={4}>
                  <p id="footer_header">  And finally...</p>
                  <p id="footer_desc"> Thank you for visiting my website. Have a nice rest of your day!</p>
                </Col>
              </Row>

            </Container>
          </div>
        </div>

      );
    }

  }
}

export default App;

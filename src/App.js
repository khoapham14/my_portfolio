// Required imports from packages & stylesheets.
import { Navbar, Nav, Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-scroll';
import React from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import swal from 'sweetalert2';
import ReCAPTCHA from "react-google-recaptcha";

// Images, Icons and Logos
import Logo from './Assets/Icons/Logo_Blue.svg';
import Logo_LightBlue from './Assets/Icons/Logo_LightBlue.svg';
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
import Cab_Card from './Assets/Projects/Cab_Booking.png';
import SEER_Card from './Assets/Projects/SEER.png';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
      width: window.innerWidth,
      name: '',
      email: '',
      message: '',
      captcha: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  onChange(value) {
    console.log("Captcha value:", value);
    this.setState({ captcha: true });
  }

  handleSubmit(event) {
    event.preventDefault();

    init("user_ZuCRyzWfalPE8iWX4tLWc");

    if (this.state.name.length === 0 || this.state.email.length === 0 || this.state.message.length <= 10) {
      swal.fire("Error!", "Please enter your name, email and a message with at least 10 characters!", "error");
    }
    else {
      var emailParams = {
        from_name: this.state.name,
        to_name: "Khoa Pham",
        from_email: this.state.email,
        message: this.state.message,
      };

      emailjs.send('service_ox9rv0q', 'template_dqz39gi', emailParams)
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          swal.fire("Success", "Your message has been sent!", "success");
        }, function (error) {
          console.log('FAILED...', error);
          swal.fire("Uh oh!", "An error occured! Please try again later.", "error");
        });
    }

    this.setState({
      name: "",
      email: "",
      message: "",
    });
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
                    height="50px"
                    width="auto"
                    alt="Khoa's Logo"
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" className="justify-content-end" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="mr-auto justify-content-end">
                    <Link to="skills_section" spy={true} smooth={true} id="nav-link"> My Skills </Link>
                    <Link to="contact_section" spy={true} smooth={true} id="nav-link"> Contact Me </Link>
                    <Link to="projects_section" spy={true} smooth={true} id="nav-link"> My Projects </Link>
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
                    I then learnt AWS and Node.js on my own.  </p>
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
            <Container id="contact_container">
              <Row>
                <Col id="media_links">
                  <p id="contact_sub_header"> Find me on these platforms: </p>
                  <Row>
                    <Col md={3} xs={3}>
                      <a href="mailto: cody.pham14@gmail.com">
                        <img
                          src={Email}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                    <Col md={3} xs={3}>
                      <a href="https://www.facebook.com/cody.vatc2/">
                        <img
                          src={Facebook}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                    <Col md={3} xs={3}>
                      <a href="https://github.com/asianlanlord">
                        <img
                          src={Github}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                    <Col md={3} xs={3}>
                      <a href="https://www.linkedin.com/in/khoa-pham-9773261ba/">
                        <img
                          src={LinkedIn}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                  </Row>

                  <Col md={10} id="contact_form">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formName">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control type="name" onChange={this.onNameChange} />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label> Email: </Form.Label>
                        <Form.Control type="email" onChange={this.onEmailChange} />
                      </Form.Group>
                      <Form.Group controlId="formMessage">
                        <Form.Label> Message: </Form.Label>
                        <Form.Control as="textarea" type="message" rows={3} onChange={this.onMessageChange} />
                      </Form.Group>
                      <ReCAPTCHA sitekey="6LffwDYaAAAAAH-ew6NnSLc5jwTFGriTGVeQ2yzx" onChange={this.onChange} />
                      <Button disabled={!this.state.captcha} variant="outline-light" type="submit"> Submit </Button>
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
                    <Button variant="primary" id="project_button" href="http://54.66.121.53/home"> See Project </Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={Simp_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> SimpliCT </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, Bootstrap, Graph.js, Github Pages. </Card.Subtitle>
                    <Card.Text> A Rubik's cube timer with a standard scrambler and basic stats tracking.
                      </Card.Text>
                    <Button variant="primary" id="project_button" href="https://asianlanlord.github.io/simplict/"> See Project </Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={Cab_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> Cabs Online </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  AWS EC-2, Apache, MySQL, PHP, Bootstrap </Card.Subtitle>
                    <Card.Text> A class assignment to create a simple cab booking system with an administrator page.
                    </Card.Text>
                    <Button variant="primary" id="project_button" href="http://ec2-3-106-124-238.ap-southeast-2.compute.amazonaws.com/booking.html"> See Project </Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={SEER_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> SEER Website </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, Heroku. </Card.Subtitle>
                    <Card.Text> A third year project for a repository strictly for Software Engineering related studies/researches/articles. Based largely on ScienceDirect.
                      </Card.Text>
                    <Button variant="primary" id="project_button" href="https://se-evidence-repo.herokuapp.com/"> See Project </Button>
                  </Card.Body>
                </Card>

              </Row>
            </Container>
          </div>
          {/* Footer Section */}
          <div id="footer">

            <Container>
              <Row>
                <Col md={4}>
                  <p id="footer_header">  Navigation</p>
                  <p><Link to="skills_section" spy={true} smooth={true} id="footer_desc"> My Skills </Link> </p>
                  <p><Link to="contact_section" spy={true} smooth={true} id="footer_desc"> Contact Me </Link> </p>
                  <p><Link to="projects_section" spy={true} smooth={true} id="footer_desc"> My Projects </Link> </p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> Documents </p>
                  <p><a id="footer_desc" href="https://drive.google.com/file/d/1yNTECSnNEvkXR_jdmG_gz2bS8f3zuyxg/view?usp=sharing">  My CV/Resume</a></p>
                  <p><a id="footer_desc" href="https://drive.google.com/file/d/1BpyqqHGwUSH_ypx118FIFU0EcnleIEMu/view?usp=sharing" > My Working Visa</a></p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> Credits </p>
                  <p><a id="footer_desc" > Minimalist Mountains from Wallpaper Access</a></p>
                  <p><a id="footer_desc" href="https://www.vecteezy.com/vector-art/127886-seabed-free-vector" > Seabed Illustration by visionheldup</a></p>

                </Col>
              </Row>
              <Row>
                <p id="footer_disclaimer"> This website was made using ReactJS, Bootstrap and hosted using AWS Amplify. </p>
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
                    height="50px"
                    width="auto"
                    alt="Khoa's Logo"
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" className="justify-content-end" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="mr-auto justify-content-end">
                    <Link to="skills_section" spy={true} smooth={true} id="nav-link"> My Skills </Link>
                    <Link to="contact_section" spy={true} smooth={true} id="nav-link"> Contact Me </Link>
                    <Link to="projects_section" spy={true} smooth={true} id="nav-link"> My Projects </Link>
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

          {/* Contact Section */}
          <div id="contact_section">
            <p id="contact_header"> My Contact Details </p>
            <Container id="contact_container">
              <Row>
                <Col id="media_links">
                  <p id="contact_sub_header"> Find me on these platforms: </p>
                  <Row>
                    <Col md={3} xs={3}>
                      <a href="mailto: cody.pham14@gmail.com">
                        <img
                          src={Email}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                    <Col md={3} xs={3}>
                      <a href="https://www.facebook.com/cody.vatc2/">
                        <img
                          src={Facebook}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                    <Col md={3} xs={3}>
                      <a href="https://github.com/asianlanlord">
                        <img
                          src={Github}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                    <Col md={3} xs={3}>
                      <a href="https://www.linkedin.com/in/khoa-pham-9773261ba/">
                        <img
                          src={LinkedIn}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                  </Row>

                  <Col md={10} id="contact_form">
                    <p id="contact_sub_header"> Send me a message: </p>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formName">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control type="name" onChange={this.onNameChange} />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label> Email: </Form.Label>
                        <Form.Control type="email" onChange={this.onEmailChange} />
                      </Form.Group>
                      <Form.Group controlId="formMessage">
                        <Form.Label> Message: </Form.Label>
                        <Form.Control as="textarea" type="message" rows={3} onChange={this.onMessageChange} />
                      </Form.Group>
                      <ReCAPTCHA sitekey="6LffwDYaAAAAAH-ew6NnSLc5jwTFGriTGVeQ2yzx" onChange={this.onChange} />
                      <Button disabled={!this.state.captcha} variant="outline-light" type="submit"> Submit </Button>
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
                    dedicated to promoting health, wellness & self-improvement businesses.
                    </Card.Text>
                    <Button variant="primary" id="project_button" href="http://54.66.121.53/home"> See Project </Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={Simp_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> SimpliCT </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> ReactJS, Bootstrap, Graph.js, Github Pages.  </Card.Subtitle>
                    <Card.Text> A Rubik's cube timer with a standard scrambler and basic stats tracking.
                    </Card.Text>
                    <Button variant="primary" id="project_button" href="https://asianlanlord.github.io/simplict/"> See Project </Button>
                  </Card.Body>
                </Card>




                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={Cab_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> Cabs Online </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  AWS EC-2, Apache, MySQL, PHP, Bootstrap </Card.Subtitle>
                    <Card.Text> A class assignment to create a simple cab booking system with an administrator page.
                    </Card.Text>
                    <Button variant="primary" id="project_button" href="http://ec2-3-106-124-238.ap-southeast-2.compute.amazonaws.com/booking.html"> See Project </Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: '65%' }}>
                  <Card.Img variant="top" src={SEER_Card} width="100%" height="auto" />
                  <Card.Body>
                    <Card.Title> SEER Website </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, Heroku. </Card.Subtitle>
                    <Card.Text> A third year project based on ScienceDirect for a Software Engineering evidences repository.
                    </Card.Text>
                    <Button variant="primary" id="project_button" href="https://se-evidence-repo.herokuapp.com/"> See Project </Button>
                  </Card.Body>
                </Card>

              </Row>
            </Container>

          </div>

          {/* Footer Section */}
          <div id="footer">

            <Container>

              <Row>
                <Col md={4}>
                  <p id="footer_header">  Navigation</p>
                  <p><Link to="skills_section" spy={true} smooth={true} id="footer_desc"> My Skills </Link> </p>
                  <p><Link to="contact_section" spy={true} smooth={true} id="footer_desc"> Contact Me </Link> </p>
                  <p><Link to="projects_section" spy={true} smooth={true} id="footer_desc"> My Projects </Link> </p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> Documents </p>
                  <p><a id="footer_desc" href="https://drive.google.com/file/d/1yNTECSnNEvkXR_jdmG_gz2bS8f3zuyxg/view?usp=sharing">  My CV/Resume</a></p>
                  <p><a id="footer_desc" href="https://drive.google.com/file/d/1BpyqqHGwUSH_ypx118FIFU0EcnleIEMu/view?usp=sharing" > My Working Visa</a></p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> Credits </p>
                  <p><a id="footer_desc" > Minimalist Mountains from Wallpaper Access</a></p>
                  <p><a id="footer_desc" href="https://www.vecteezy.com/vector-art/127886-seabed-free-vector"> Seabed Illustration by visionheldup</a></p>

                </Col>
              </Row>
              <Row>
                <p id="footer_disclaimer"> This website was made using ReactJS, Bootstrap and hosted using AWS Amplify. </p>
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
                    height="50px"
                    width="auto"
                    alt="Khoa's Logo"
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" className="justify-content-end" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                  <Nav className="ml-auto justify-content-end">
                    <Link to="skills_section" spy={true} smooth={true} id="nav-link"> My Skills </Link>
                    <Link to="contact_section" spy={true} smooth={true} id="nav-link"> Contact Me </Link>
                    <Link to="projects_section" spy={true} smooth={true} id="nav-link"> My Projects </Link>
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
                  I then learnt AWS and Node.js on my own.  </p>

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
            <Container id="contact_container">
              <Row>
                <Col md={6}>
                  <p id="contact_sub_header"> Send me a message: </p>
                  <Col md={10} id="contact_form">
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formName">
                        <Form.Label> Name: </Form.Label>
                        <Form.Control type="name" onChange={this.onNameChange} />
                      </Form.Group>
                      <Form.Group controlId="formEmail">
                        <Form.Label> Email: </Form.Label>
                        <Form.Control type="email" onChange={this.onEmailChange} />
                      </Form.Group>
                      <Form.Group controlId="formMessage">
                        <Form.Label> Message: </Form.Label>
                        <Form.Control as="textarea" type="message" rows={3} onChange={this.onMessageChange} />
                      </Form.Group>
                      {/* Test key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI     Real Key: 6LffwDYaAAAAAH-ew6NnSLc5jwTFGriTGVeQ2yzx*/}
                      <ReCAPTCHA sitekey="6LffwDYaAAAAAH-ew6NnSLc5jwTFGriTGVeQ2yzx" onChange={this.onChange} />
                      <Button disabled={!this.state.captcha} variant="outline-light" type="submit"> Submit </Button>
                    </Form>
                  </Col>
                </Col>
                <Col md={6} id="media_links">
                  <p id="contact_sub_header"> Find me on these platforms: </p>
                  <Row>
                    <Col md={2}></Col>
                    <Col md={2}>
                      <a href="mailto: cody.pham14@gmail.com">
                        <img
                          src={Email}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                      <a href="https://www.facebook.com/cody.vatc2/">
                        <img
                          src={Facebook}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                      <a href="https://github.com/asianlanlord">
                        <img
                          src={Github}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>

                      <a href="https://www.linkedin.com/in/khoa-pham-9773261ba/">
                        <img
                          src={LinkedIn}
                          height="40em"
                          width="auto"
                          alt="Mail Logo"
                          className="contact_icons"
                        />
                      </a>
                    </Col>
                    <Col md={6}>
                      <p id="contact_text">  cody.pham14@gmail.com</p>
                      <p id="contact_text"> Pham Anh Khoa </p>
                      <p id="contact_text"> asianlanlord </p>
                      <p id="contact_text"> Khoa Pham </p>
                    </Col>
                    <Col md={2}></Col>
                  </Row>
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
                      <Button variant="primary" id="project_button" href="http://54.66.121.53/home"> See Project </Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card style={{ width: '65%' }}>
                    <Card.Img variant="top" src={Simp_Card} width="100%" height="auto" />
                    <Card.Body>
                      <Card.Title> SimpliCT </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">  ReactJS, Bootstrap, Graph.js, Github Pages. </Card.Subtitle>
                      <Card.Text> A Rubik's cube timer with a standard scrambler and basic stats tracking.
                    </Card.Text>
                      <Button variant="primary" id="project_button" href="https://asianlanlord.github.io/simplict/"> See Project </Button>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>

              <Row>
                <Col md={6}>
                  <Card style={{ width: '65%' }}>
                    <Card.Img variant="top" src={Cab_Card} width="100%" height="auto" />
                    <Card.Body>
                      <Card.Title> Cabs Online </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">  AWS EC-2, Apache, MySQL, PHP, Bootstrap </Card.Subtitle>
                      <Card.Text> A class assignment to create a simple cab booking system with an administrator page.
                    </Card.Text>
                      <Button variant="primary" id="project_button" href="http://ec2-3-106-124-238.ap-southeast-2.compute.amazonaws.com/booking.html"> See Project </Button>
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
                      <Button variant="primary" id="project_button" href="https://se-evidence-repo.herokuapp.com/"> See Project </Button>
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
                <Col md={4}>
                  <p id="footer_header">  Navigation</p>
                  <p><Link to="skills_section" spy={true} smooth={true} id="footer_desc"> My Skills </Link> </p>
                  <p><Link to="contact_section" spy={true} smooth={true} id="footer_desc"> Contact Me </Link> </p>
                  <p><Link to="projects_section" spy={true} smooth={true} id="footer_desc"> My Projects </Link> </p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> Documents </p>
                  <p><a id="footer_desc" href="https://drive.google.com/file/d/1yNTECSnNEvkXR_jdmG_gz2bS8f3zuyxg/view?usp=sharing">  My CV/Resume</a></p>
                  <p><a id="footer_desc" href="https://drive.google.com/file/d/1BpyqqHGwUSH_ypx118FIFU0EcnleIEMu/view?usp=sharing" > My Working Visa</a></p>
                </Col>

                <Col md={4}>
                  <p id="footer_header"> Credits </p>
                  <p><a id="footer_desc" > Minimalist Mountains from Wallpaper Access</a></p>
                  <p><a id="footer_desc" href="https://www.vecteezy.com/vector-art/127886-seabed-free-vector"> Seabed Illustration by visionheldup</a></p>
                </Col>
              </Row>
              <Row>
                <p id="footer_disclaimer"> This website was made using ReactJS, Bootstrap and hosted using AWS Amplify. </p>
              </Row>
            </Container>
          </div>
        </div>

      );
    }

  }
}

export default App;

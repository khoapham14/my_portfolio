import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div id="intro">
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/home">
            <img src="../Icons/Logo_White.svg" width="100px" height="auto"
              alt="Khoa's Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">My Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

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
      </Container>


    </div>


  );
}

export default App;

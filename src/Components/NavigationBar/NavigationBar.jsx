import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from '../../Assets/Icons/Logo_Blue.svg';

const NavigationBar = (props) => {
  return (
    <div>
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
    </div>
  );
}

export default NavigationBar;
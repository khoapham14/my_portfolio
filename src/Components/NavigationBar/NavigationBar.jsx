import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Logo from '../../Assets/Icons/Logo_Blue.svg';
import './NavigationBar.css';

const NavigationBar = (props) => {
  return (
    <div>
      <Container className="navBar">
        <Navbar expand="lg">
          <Navbar.Brand>
            <img
              src={Logo}
              alt="Khoa's Logo"
              className="d-inline-block align-top logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="custom-toggler" className="justify-content-end" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto justify-content-end">
              <Link to="projects_section" spy={true} smooth={true} id="nav-link"> Projects </Link>
              <Link to="skills_section" spy={true} smooth={true} id="nav-link"> Skills </Link>
              <Link to="contact_section" spy={true} smooth={true} id="nav-link"> Contact </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavigationBar;
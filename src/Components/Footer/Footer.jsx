import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col md={4} sm={6} xs={6}>
            <p id="footer_header">Navigation</p>
            <p><Link to="projects_section" spy={true} smooth={true} id="footer_desc"> My Projects </Link> </p>
            <p><Link to="skills_section" spy={true} smooth={true} id="footer_desc"> Skills </Link> </p>
            <p><Link to="contact_section" spy={true} smooth={true} id="footer_desc"> Contact Me </Link> </p>
          </Col>

          <Col md={4} sm={6} xs={6}>
            <p id="footer_header"> Documents </p>
            <p><a id="footer_desc" href="https://docs.google.com/document/d/15-zNXyYNb5HW8aOzQFOw4jzlYUGow4FcUdzRTf-JeGg/edit?usp=sharing">  My CV/Resume</a></p>
            <p><a id="footer_desc" href="https://drive.google.com/file/d/1BpyqqHGwUSH_ypx118FIFU0EcnleIEMu/view?usp=sharing" > My Working Visa</a></p>
          </Col>

          <Col md={4} sm={12}>
            <p id="footer_header"> Credits </p>
            <p><a id="footer_desc" href="https://wallpaperaccess.com/minimal-mountain" > Site theme inspired by Minimalist Mountains from Wallpaper Access</a></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
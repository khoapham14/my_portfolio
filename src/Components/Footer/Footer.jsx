import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Footer.css';

import Khoa_CV from '../../Assets/Khoa_CV.pdf';
import Khoa_Visa from '../../Assets/Khoa_Visa.pdf';

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col md={4} sm={6} xs={6}>
            <p id="footer_header">Navigation</p>
            <p><Link to="projects_section" spy={true} smooth={true} id="footer_desc">Projects </Link> </p>
            <p><Link to="skills_section" spy={true} smooth={true} id="footer_desc"> Skills </Link> </p>
            <p><Link to="contact_section" spy={true} smooth={true} id="footer_desc"> Contact </Link> </p>
          </Col>

          <Col md={4} sm={6} xs={6}>
            <p id="footer_header"> Documents </p>
            <p><a id="footer_desc" href={Khoa_CV} target="_blank">My CV/Resume</a></p>
            <p><a id="footer_desc" href={Khoa_Visa} target="_blank"> My Visa</a></p>
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
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col md={4}>
            <p id="footer_header">Navigation</p>
            <p><Link to="skills_section" spy={true} smooth={true} id="footer_desc"> My Skills </Link> </p>
            <p><Link to="contact_section" spy={true} smooth={true} id="footer_desc"> Contact Me </Link> </p>
            <p><Link to="projects_section" spy={true} smooth={true} id="footer_desc"> My Projects </Link> </p>
          </Col>

          <Col md={4}>
            <p id="footer_header"> Documents </p>
            <p><a id="footer_desc" href="https://drive.google.com/file/d/1TVPTmprnrHuDSLWJPGeNBCYW1z1UNmx7/view?usp=sharing">  My CV/Resume</a></p>
            <p><a id="footer_desc" href="https://drive.google.com/file/d/1BpyqqHGwUSH_ypx118FIFU0EcnleIEMu/view?usp=sharing" > My Working Visa</a></p>
          </Col>

          <Col md={4}>
            <p id="footer_header"> Credits </p>
            <p><a id="footer_desc" href="https://wallpaperaccess.com/minimal-mountain" > Minimalist Mountains from Wallpaper Access</a></p>
            <p><a id="footer_desc" href="https://www.vecteezy.com/vector-art/127886-seabed-free-vector"> Seabed Illustration by visionheldup</a></p>

          </Col>
        </Row>
        <Row>
          <p id="footer_disclaimer"> This website was made using ReactJS, Bootstrap and hosted using AWS Amplify. </p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './ProjectSection.css';
import React from "react";

import WAU_Card from '../../Assets/Projects/We_Are_Us_Card.png';
import Simp_Card from '../../Assets/Projects/SimpliCT.png';
import Cab_Card from '../../Assets/Projects/Cab_Booking.png';
import SEER_Card from '../../Assets/Projects/SEER.png';
import Nothing_Card from '../../Assets/Projects/Nothing_Project.png';
import SectionHeader from '../SectionHeader/SectionHeader';
// import { motion } from "framer-motion";


const ProjectSection = (props) => {
  return (
    <div id="projects_section">
      <SectionHeader sectionTitle="Projects" sectionDescription="Projects I've done outside of work." />
      <Container>
        <Row>
          <Col md={12} lg={6}>
          <Card style={{ width: '85%', }}>
              <Card.Img variant="top" src={Nothing_Card} width="100%" height="auto" />
              <Card.Body>
                <Card.Title> Nothing </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">  MERN stack, React Router, Redux,
                  Stripe, Heroku, Firebase Authentication </Card.Subtitle>
                <Card.Text> An online store that sells nothing.
                </Card.Text>
                <Button variant="primary" id="project_button" href="https://shielded-inlet-26000.herokuapp.com/" target="_blank"> See Project </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
            <Card style={{ width: '85%', }}>
              <Card.Img variant="top" src={Simp_Card} width="100%" height="auto" />
              <Card.Body>
                <Card.Title> CubeTimer </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">  ReactJS, Bootstrap, Graph.js, Github Pages. </Card.Subtitle>
                <Card.Text> A Rubik's cube timer with a standard scrambler and basic stats tracking.
                </Card.Text>
                <Button variant="primary" id="project_button" href="https://khoapham14.github.io/simplict/" target="_blank"> See Project </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <Row>
          <Col md={12} lg={6}>
          <Card style={{ width: '85%', }}>
              <Card.Img variant="top" src={SEER_Card} width="100%" height="auto" />
              <Card.Body>
                <Card.Title> This website </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">  HTML, CSS, ReactJS, Bootstrap, Figma, Github Pages. </Card.Subtitle>
                <Card.Text> My personal porfolio where I show case my projects and skills. I designed the page layout, created the vector graphics in Figma, and hosted the site on Github Pages.
                </Card.Text>
                {/* <Button variant="primary" id="project_button" href="https://se-evidence-repo.herokuapp.com/"> See Project </Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
          <Card style={{ width: '85%', }}>
              <Card.Img variant="top" src={WAU_Card} width="100%" height="auto" />
              <Card.Body>
                <Card.Title> We Are Us MVP Website </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">  ReactJS, Bootstrap, NodeJS, AWS, Strapi CMS, Google Maps </Card.Subtitle>
                <Card.Text> A startup similar to Airbnb dedicated to health & wellness businesses. The company went live with a new website 
                  and this MVP version is no longer available.
                </Card.Text>
                {/* <Button variant="primary" id="project_button" disabled> See Project </Button> */}
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default ProjectSection;
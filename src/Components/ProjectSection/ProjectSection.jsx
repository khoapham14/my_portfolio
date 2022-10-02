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
      <SectionHeader sectionTitle="Projects" sectionDescription="Things I've made outside of work and school." />
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
                <Button variant="primary" id="project_button" href="https://shielded-inlet-26000.herokuapp.com/"> See Project </Button>
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
                <Button variant="primary" id="project_button" href="https:/khoapham14.github.io/simplict/"> See Project </Button>
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
                <Card.Subtitle className="mb-2 text-muted">  ReactJS, React Bootstrap, Heroku. </Card.Subtitle>
                <Card.Text> My personal porfolio where I designed and built everything. 
                </Card.Text>
                <Button variant="primary" id="project_button" href="https://se-evidence-repo.herokuapp.com/"> See Project </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6}>
          <Card style={{ width: '85%', }}>
              <Card.Img variant="top" src={WAU_Card} width="100%" height="auto" />
              <Card.Body>
                <Card.Title> We Are Us Website </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">  ReactJS, Bootstrap, NodeJS, AWS, Strapi CMS, Google Maps </Card.Subtitle>
                <Card.Text> A startup similar to Airbnb dedicated to health & wellness businesses.
                </Card.Text>
                {/* <Button variant="primary" id="project_button" disabled> See Project </Button> */}
                <p>*Site has gone live, this MVP is no longer viewable</p>
              </Card.Body>
            </Card>

          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default ProjectSection;
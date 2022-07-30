import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './ProjectSection.css';
import React from "react";

import WAU_Card from '../../Assets/Projects/We_Are_Us_Card.png';
import Simp_Card from '../../Assets/Projects/SimpliCT.png';
import Cab_Card from '../../Assets/Projects/Cab_Booking.png';
import SEER_Card from '../../Assets/Projects/SEER.png';
import Nothing_Card from '../../Assets/Projects/Nothing_Project.png';


const ProjectSection = (props) => {
  return (
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

        <Row>
          <Col md={6}>
            <Card style={{ width: '65%' }}>
              <Card.Img variant="top" src={Nothing_Card} width="100%" height="auto" />
              <Card.Body>
                <Card.Title> Nothing </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">  MERN stack, React Router, Redux, Bootstrap,
                  Stripe, Heroku, Firebase Authentication </Card.Subtitle>
                <Card.Text> An online store that sells nothing.
                </Card.Text>
                <Button variant="primary" id="project_button" href="https://shielded-inlet-26000.herokuapp.com/"> See Project </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default ProjectSection;
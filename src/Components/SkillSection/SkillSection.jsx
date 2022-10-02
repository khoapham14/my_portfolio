import {Container, Card, Col, Row} from 'react-bootstrap';
import './SkillSection.css';
import React from "react";
import SkillList from './SkillList/SkillList';
import SectionHeader from '../SectionHeader/SectionHeader';

import WorkIcon from '../../Assets/Icons/Work_Icon.svg';
import SchoolIcon from '../../Assets/Icons/School_Icon.svg';
import SkillIcon from '../../Assets/Icons/Person_Icon.svg';

const usedAtWork = ["Sharepoint", "ReactJS", "Typescript", "Figma", "SASS", "Jest", "Cypress", "FluentUI", "Tailwind", "Bootstrap", "Power Automate", "Azure DevOps", "Git", "MobX"];
const usedInProj = ["Stripe", "AWS", "NodeJS", "Heroku", "Redux", "InVision", "Trello", "Storybook", "MongoDB", "SQL", "PHP"];
const softSkills = ["Communication", "Self-motivated", "Agile", "Teamwork", "Good Learner"];

const SkillSection = (props) => {
  return (
    <div id="skills_section">
      <SectionHeader sectionTitle="Skills" sectionDescription="My skills & technologies and how I learnt them" />
      <Container id="skills_container">
        <Row>
          <Col sm={12} md={12} lg={4}>
            <Card style={{  backgroundColor: 'white' }}>
              <Card.Body>
                <img src={WorkIcon} className="skills_icon" />
                <Card.Title className="card-title"> Used at work </Card.Title>

                <Card.Text> 
                  Technologies I use frequently at my current job.
                </Card.Text>

                <SkillList skillArray={usedAtWork} />
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={12} lg={4}>
            <Card style={{  backgroundColor: 'white'}}>
              <Card.Body>
                <img src={SchoolIcon} className="skills_icon" />
                <Card.Title className="card-title"> Used at school </Card.Title>

                <Card.Text> 
                  Technologies I learnt from university projects.
                </Card.Text>

                <SkillList skillArray={usedInProj} />
              </Card.Body>
            </Card>
          </Col>

          <Col sm={12} md={12} lg={4}>
            <Card style={{  backgroundColor: 'white'}}>
              <Card.Body>
                <img src={SkillIcon} className="skills_icon" />
                <Card.Title className="card-title"> Personal skills </Card.Title>

                <Card.Text> 
                  Other skills I have picked up along the way.
                </Card.Text>

                <SkillList skillArray={softSkills} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default SkillSection;
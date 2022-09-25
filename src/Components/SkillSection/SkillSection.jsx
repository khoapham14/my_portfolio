import { Navbar, Nav, Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './SkillSection.css';
import { Link } from 'react-scroll';
import React from "react";
import SkillList from './SkillList/SkillList';
import SectionHeader from '../SectionHeader/SectionHeader';

const usedAtWork = ["Sharepoint", "ReactJS", "Typescript", "Figma", "SASS", "Jest", "Cypress", "FluentUI", "Tailwind", "Bootstrap", "Power Automate", "Azure DevOps", "Git", "MobX"];
const usedInProj = ["Stripe", "AWS", "NodeJS", "Heroku", "Redux", "InVision", "Trello", "Google Office Suite", "MS Office Suite", "Storybook", "MongoDB", "SQL", "PHP"];
const softSkills = ["Communication", "Self-motivated Learner", "Agile Methodologies", "Teamwork"];

const SkillSection = (props) => {
  return (
    <div id="skills_section">
      <SectionHeader sectionTitle="Skills" sectionDescription="My skills & technologies and how I learnt them" />
      {/* TODO: Add Header */}
      <Container id="skills_container">
        <div id="skills_block">
          <p id="skills_header">Used at Work</p>
          <SkillList skillArray={usedAtWork} />
        </div>
        <div id="skills_block">
          <p id="skills_header">Used in Personal & School Projects</p>
          <SkillList skillArray={usedInProj} />
        </div>
        <div id="skills_block">
          <p id="skills_header">Soft skills</p>
          <SkillList skillArray={softSkills} />
        </div>
      </Container>
    </div>

  );
}

export default SkillSection;
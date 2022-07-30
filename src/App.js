// Required imports from packages & stylesheets.
import { Navbar, Nav, Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-scroll';
import React from "react";

// Images, Icons and Logos
import Logo from './Assets/Icons/Logo_Blue.svg';
import Skill_FrontEnd from './Assets/Icons/Skill_FrontEnd.svg';
import Skill_PC from './Assets/Icons/Skill_PC.svg';
import Skill_Java from './Assets/Icons/Skill_Java.svg';
import Skill_C from './Assets/Icons/Skill_C.svg';
import Skill_Comms from './Assets/Icons/Skill_Comms.svg';
import Skill_BackEnd from './Assets/Icons/Skill_BackEnd.svg';
import White_Arrow from './Assets/Icons/arrow-204-512.png';
import Email from './Assets/Icons/email-256.png';
import Facebook from './Assets/Icons/facebook-4-256.png';
import Github from './Assets/Icons/github-9-256.png';
import LinkedIn from './Assets/Icons/linkedin-3-256.png';
import WAU_Card from './Assets/Projects/We_Are_Us_Card.png';
import Simp_Card from './Assets/Projects/SimpliCT.png';
import Cab_Card from './Assets/Projects/Cab_Booking.png';
import SEER_Card from './Assets/Projects/SEER.png';
import Nothing_Card from './Assets/Projects/Nothing_Project.png';

import WebPage from './Components/WebPage';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
      width: window.innerWidth
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    window.removeEventListener("scroll", this.handleScroll, true);
  }

  handleScroll(event) {
    const scroll_pos = document.body.scrollTop;
    if (scroll_pos > 0) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 770;
    const isTablet = width > 770 && width <= 1000;

    return (
      <WebPage />
    );

  }
}

export default App;

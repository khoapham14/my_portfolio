import React, { Component } from 'react';
import HeroSection from './HeroSection/HeroSection';
import ProjectSection from './ProjectSection/ProjectSection';
import SkillSection from './SkillSection/SkillSection';
import ContactSection from './ContactSection/ContactSection';
import Footer from './Footer/Footer';


const DesktopPage = (props) => {
  return (
    <>  
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default DesktopPage;

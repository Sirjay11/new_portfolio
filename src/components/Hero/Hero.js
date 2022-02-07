import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
  <Section row nonpadding>
    <LeftSection>
      <SectionTitle main center>
        Hi James Alexander Here Welcome To <br />
        My Portfolio Website
      </SectionTitle>
      <SectionText>
        The purpose of this website is to provide a web-based interface to
        potential clients and employers to conveniently showcase my skills and
        abilities.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
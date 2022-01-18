import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = () => (
  <Section row nonpadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Portfolio Website
      </SectionTitle>
      <SectionText>
        The purpose of this website is to provide a medium interface to potential clients and employers to showcase my skills and abilities.
      </SectionText>
      <Button onClick={()=>window.location = "https://google.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
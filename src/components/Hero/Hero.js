import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

//ANCHOR - enter company name
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          TrioTech Minds
        </SectionTitle>
        <SectionText>
        Empowering your vision with cutting-edge mobile apps, robust backend solutions, dynamic websites, and AI innovations—crafted to elevate your business into the future.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
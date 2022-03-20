import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
const Hero = (props) => (
 <Section row nopadding>
 <LeftSection>
   <SectionTitle main center>
     Welcome <br/>
     My Personal Portfolio 
   </SectionTitle>
   <SectionText>
   Hey there, This is Aman singh. I am an Front End  developer and Data Analyst.
   Work as Intern in Cloudexcel.
   
    </SectionText>
    { <Button onClick={()=>window.location.href="https://drive.google.com/file/d/1bvLPbaDnfqh7o8IcZYuHO7zAARKJ58NP/view?usp=sharing"}>my Resume</Button> }

 
 </LeftSection>

 </Section>
);

export default Hero;
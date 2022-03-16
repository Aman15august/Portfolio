import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { CardInfo } from '../Projects/ProjectsStyles';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 10, text: ' Projects'},
  { number: 200,text: 'Linkdin Conections', },
  { number: 50,text: 'Github Followers', },
  { number: 50,text: 'Github Stars' }
];

const Acomplishments = () => (
 <Section>
   <SectionTitle> Personal Achivments </SectionTitle>
   <Boxes>
     {data.map((card,index)=>(
       <Box key={index}>
       <BoxNum>{card.number}+</BoxNum>
         <BoxText>{card.text}</BoxText>
       </Box>
     ))};
   </Boxes> 
  
 </Section>
);

export default Acomplishments;

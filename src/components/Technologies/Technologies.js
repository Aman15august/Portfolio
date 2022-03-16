import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';// **** i have to add icons in List item(pending) 
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id= "tech">
 <SectionDivider/>
 <br/>
 <SectionTitle>Technologies</SectionTitle>
 
 <SectionText>
 I,ve worked with a range a technologies in the web devlopment World.
From Front-end To Desgin
 </SectionText>
 
 <List>
 <ListItem>
 <DiFirebase size="3rem"/> 
   <ListContainer>
     <ListTitle>Front-End</ListTitle>
     <ListParagraph>
       Expirence with <br/>
       Rect.js
     </ListParagraph>
   </ListContainer>
   </ListItem>

   <ListItem>
   <DiReact size="3rem"/>
   <ListContainer>
     <ListTitle>Back-End</ListTitle>
     <ListParagraph>
      No  Expirence       
     </ListParagraph>
   </ListContainer>
   </ListItem>

   <ListItem>
   <DiZend size="3rem"/>
   <ListContainer>
     <ListTitle>Data Science</ListTitle>
     <ListParagraph>
       Expirence with <br/>
       Data Analyst and
       Machine Learning
     </ListParagraph>
   </ListContainer>
   </ListItem>
 </List>
</Section>


);

export default Technologies;

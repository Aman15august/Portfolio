import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
  <FooterWrapper>
    <LinkList>
      <LinkColumn>
        <LinkTitle>Contact No. </LinkTitle>
        <LinkItem href="phone no:7318041396">7318041396</LinkItem>
      </LinkColumn>

      <LinkColumn>
        <LinkTitle>Email ID </LinkTitle>
        <LinkItem href="Email:Amansingh13611@gmail.com">Amansingh13611@gmail.com</LinkItem>
      </LinkColumn>

    </LinkList>
    <SocialContainer>
      <CompanyContainer>        
          <Slogan>  Innovating one project at a time</Slogan>        
      </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="http//github.com">
     <AiFillGithub size="3rem"/>   

     </SocialIcons>

     <SocialIcons href="http//linkedin.com">
     <AiFillLinkedin size="3rem"/>   

     </SocialIcons>
     <SocialIcons href="http//instagram.com">
     <AiFillInstagram size="3rem"/>   

     </SocialIcons>
     </SocialContainer>
     </SocialContainer>
   
  </FooterWrapper>
  );
};

export default Footer;

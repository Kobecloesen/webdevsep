import React from 'react';
// import { Linking } from 'react-native';
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterContactItem, FooterContactMail, SocialIconLink, WebsiteRights} from './FooterElements';


const Footer = () => {
    return (
        <FooterContainer id='contact'>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>WHERE TO FIND ME</FooterLinkTitle>
                           <FooterContactItem>TIENSESTEENWEG 167</FooterContactItem>
                           <FooterContactItem>3010 LEUVEN</FooterContactItem>
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>SEND ME A NOTE</FooterLinkTitle>
                           <FooterContactMail >CLOESEN.KOBE@GMAIL.COM</FooterContactMail>
                           <FooterContactItem>TEL: +32 493 64 91 22</FooterContactItem>
                       </FooterLinkItems>
                       <FooterLinkItems>
                            <FooterLinkTitle>FOLLOW ME</FooterLinkTitle>
                            <FooterContactItem>
                                <SocialIconLink href="//github.com/Kobecloesen" aria-label="Github"><FaGithub /></SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com/in/kobe-cloesen/"  aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                                <SocialIconLink href="//www.instagram.com/kobe.cloesen/"   aria-label="Instagram"><FaInstagram /></SocialIconLink>
    	                    </FooterContactItem>
                       </FooterLinkItems>

                       
                   </FooterLinksWrapper>
               </FooterLinksContainer>
                    <WebsiteRights>&copy; {new Date().getFullYear()} MADE BY KOBE CLOESEN IN REACT</WebsiteRights>   
           </FooterWrap> 
        </FooterContainer>
    )
}

export default Footer;

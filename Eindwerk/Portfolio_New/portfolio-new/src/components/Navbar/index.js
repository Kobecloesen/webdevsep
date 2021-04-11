import React from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements';

const toggleHome = () => {
    scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="home" onClick={toggleHome}>KOBO UNIVERSALIS</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"

                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-60}
                                
                            >ABOUT</NavLinks>
                        </NavItem>                        
                        <NavItem>
                            <NavLinks to="front-end development"
                                 
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-60}
                            >FRONT-END DEVELOPMENT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="art"
                                 
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-60}
                            >ART</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="food"
                                 
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-60}
                            >FOOD</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="acting"
                                 
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-60}
                            >ACTING</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="furniture"
                                
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-60}
                            >FURNITURE</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                             
                                smooth={true} 
                                duration={700} 
                                spy={true} 
                                exact='true' 
                                offset={-60}
                            >CONTACT</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

import React from 'react';
import {
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>ABOUT</SidebarLink>
                    <SidebarLink to="front-end development" onClick={toggle}>FRONT-END DEVELOPMENT</SidebarLink>
                    <SidebarLink to="art" onClick={toggle}>ART</SidebarLink>
                    <SidebarLink to="food" onClick={toggle}>FOOD</SidebarLink>
                    <SidebarLink to="acting" onClick={toggle}>ACTING</SidebarLink>
                    <SidebarLink to="furniture" onClick={toggle}>FURNITURE</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>CONTACT</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}



export default Sidebar
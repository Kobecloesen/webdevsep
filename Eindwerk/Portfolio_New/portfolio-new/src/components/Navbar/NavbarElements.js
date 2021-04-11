import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const Nav = styled.nav`
    background: #eb5d44;
    height: 70px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;

`;

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 980px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: center;
    text-align: center;
    margin-right: --22px;

    @media screen and (max-width: 980px) {
        display: none;
    }
`

export const NavItem = styled.ul`
    height: 70px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &:hover {
        color:  #e8e1cc;
        transition: 0.5s ease-in-out;
    }

    &.active { 
        border-bottom: 3px solid #e8e1cc;
        color:  #e8e1cc;

    }
`
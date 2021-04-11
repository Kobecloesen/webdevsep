import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background: #eb5d44;
`

export const FooterWrap = styled.div`
    padding: 22px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;


    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px ;
    text-align: center;
    width: 200px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 16px;
`

export const FooterContactItem = styled.p`
    font-size: 16px;
    margin-bottom: 0.5rem;

`

export const FooterContactMail = styled.a`
    font-size: 16px;
    margin-bottom: 0.5rem;
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 42px;
    padding-right: 12px;

`

export const WebsiteRights = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
    font-size: 14px

`
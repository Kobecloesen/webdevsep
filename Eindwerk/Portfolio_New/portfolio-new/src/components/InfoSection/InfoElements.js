import styled from 'styled-components';

export const InfoContainer = styled.div`
    background: #e8e1cc;
    color: #eb5d44;
    

    @media screen and (max-width: 989px) {
        padding: 60px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 660px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 45px 24px;
    justify-content: center;
    /* margin-top: 16px; */

    @media screen and (max-width: 989px) {
        height: 890px;
        
    }
    @media screen and (max-width: 489px) {
        height: 1450px;
    }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `col1 col2`)};


    @media screen and (max-width: 989px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    
    padding: 0 15px;
    grid-area: col1;

    
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    

    @media screen and (max-width: zpx) {
    vertical-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
`
export const ImageRow = styled.div`

    max-width: 1000px;
    margin: 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 20px;
    padding: 50px;

    @media screen and (max-width: 489px) {
        grid-template-columns: 1fr
    }
`



export const Img = styled.img`
    width: 100%; 
    /* margin: 20px 0 10px 0; */
    padding-right: 0;
    clip-path: circle( 50% at 50% 50%);
    max-width: 250px;
    min-width: 250px;
    min-height: 250px;

    @media screen and (max-width: 989px) {
        max-width: 260px;
        min-width: 260px;
        min-height: 260px;
    }

`

export const TextWrapper = styled.div`
    max-width:  540px;
    padding-top: 0;
    padding-bottom: 20px;

    @media screen and (max-width: 989px) {
        max-width: 420px;
        margin-left: 62px;

        padding-left: 32px;
    }

    @media screen and (max-width: 489px) {
        max-width: 320px;
        margin-left: 0px;

    }

    @media screen and (max-width: 449px) {
        max-width: 320px;
        padding-left: 46px;
    }
`


export const Heading= styled.h1`
    margin-bottom: 24px;
    font-size: 38px;
    line-height: 1.1;
    font-weight: 400;
    color: #eb5d44;

    @media screen and (max-width: 838px) {
        font-size: 38px;
    }

    @media screen and (max-width: 539px) {
        font-size: 46.6px;

    }

    @media screen and (max-width: 480px) {
        font-size: 36px;
 

    }
    @media screen and (max-width: 397px) {
        font-size: 31.3px;


    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 17px;
    line-height: 24px;
    color: #eb5d44;

    @media screen and (max-width: 489px) {
        margin-bottom: 6px
    }

`


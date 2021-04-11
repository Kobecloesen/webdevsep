import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #e8e1cc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 650px;
    position: relative;
    z-index: 1;
    
    /* border-bottom: 1px solid #eb5d44; */



    @media screen and (max-width: 768px) {
        height: 530px;
    }


    @media screen and (max-width: 480px) {
        height: 420px;
    }

    @media screen and (max-width: 397px) {
        height: 410px;
    }

    
    
    /*add: before styles*/
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`

export const HeroImgWrapper = styled.div`
    margin-top: 45px;
    vertical-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


`

export const HeroImg = styled.img`

    clip-path: ellipse(50% 50% at 50% 50%);
    max-height: 525px;
    max-width: 525px;
    display: flex;
    filter: grayscale(83%);

    @media screen and (max-width: 768px) {
        max-height: 400px;
        max-width: 400px;
    }

    @media screen and (max-width: 480px) {
        max-height: 312px;
        max-width: 312px;
    }
    @media screen and (max-width: 397px) {
        max-height: 295px;
        max-width: 295px;
    }
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: relative;
    padding: 8px 0.5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;

    @media screen and (max-width: 480px) {
        padding: 8px 0.5px;
    }

    @media screen and (max-width: 397px) {
        padding: 8px 0.5px;
    }
`

export const HeroH1 = styled.h1`
    color: #eb5d44;
    font-size: 75px;
    text-align: center;
    word-spacing: 25px;



    @media screen and (max-width: 768px) {
        font-size: 53.9px;
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

export const HeroP = styled.p`
    margin-top: 24px;
    color: #eb5d44;
    font-size: 20px;
    text-align: center;
    max-width: 600px;
    position: sticky;
    position: absolute;
    bottom: 20px;
    

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }

    @media screen and (max-width: 539px) {
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12.5px;
    }
    @media screen and (max-width: 397px) {
        font-size: 11.2px;
    }
`

import React from 'react';
import Image from '../../images/img_1.jpg';
import { HeroContainer, HeroBg, HeroImg, HeroImgWrapper, HeroContent, HeroH1, HeroP} from './HeroElement';


const HeroSection = () => {
    return (
        <HeroContainer >
            <HeroBg>
                <HeroImgWrapper>
                    <HeroImg src={Image} />
                </HeroImgWrapper>
            </HeroBg>
            <HeroContent>
                <HeroH1>HELLO, I'M KOBE</HeroH1>
                <HeroH1>I AM A MAKER</HeroH1>
            </HeroContent>                
                <HeroP>FRONT-END DEVELOPMENT | ART | FOOD | ACTING | FURNITURE</HeroP>
        </HeroContainer>
    )
}

export default HeroSection
   
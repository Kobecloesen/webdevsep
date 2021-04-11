import React from 'react';
import {InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, Column2,  ImageRow, Heading, Subtitle, Img} from './InfoElements';

const InfoSection = ({imgStart, headLine, discription, img1, img2, img3, img4, alt, id}) => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading>{headLine}</Heading>
                                <Subtitle>{discription}</Subtitle>
                            </TextWrapper>
                        </Column1>                        
                        <Column2>
                            <ImageRow>
                                <Img src={img1} alt={alt}/>
                                <Img src={img2} alt={alt}/>
                                <Img src={img3} alt={alt}/>
                                <Img src={img4} alt={alt}/>
                            </ImageRow>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection

'use client'
import Image from "next/image";
import LayoutContainer from "@/component/LayoutContainer";
import styled from "styled-components";
import React from 'react';
type BusinessPhilosophyProps = {
  imageUrl: string;
  heading: string;
  largeParagraph: string;
  smallParagraph: string;
};

const BusinessPhilosophy: React.FC<BusinessPhilosophyProps> = ({
  imageUrl,
  heading,
  largeParagraph,
  smallParagraph,
}) => {
  return (
    <LayoutContainerWrapper>
      <ImageWrap>
        <Image
          src={imageUrl}
          alt=""
          width={671}
          height={583}
          priority
        />
      </ImageWrap>
      <TextWrap>
        <Heading>{heading}</Heading>
        <LargeParagraph dangerouslySetInnerHTML={{ __html: largeParagraph }} />
        <SmallParagraph>
          {smallParagraph}
        </SmallParagraph>
      </TextWrap>
    </LayoutContainerWrapper>
  );
};

export default BusinessPhilosophy;
const ImageWrap = styled.div`
    margin-left: -315px;
    ${({theme})=>theme.style.mediaWidth.mobile`
     margin-left: 0px;
        img {
         max-width: 100%;
    height: auto;}
    `}
    
`
const TextWrap = styled.div`

`
const LayoutContainerWrapper = styled(LayoutContainer)`
display: flex;
margin-top:76px;
gap: 79px;

${({theme})=>theme.style.mediaWidth.mobile`
  margin-top:68px;
`}
  ${({theme})=>theme.style.mediaWidth.mobile`
  ${theme.style.flexColumnNoWrap}
  `}
`;

const Heading = styled.h2`
  font-size: 34px;
  color: #333;
  margin-bottom: 16px;
  font-weight: 600;
`;

const LargeParagraph = styled.p`
  & , p,span {
    font-size: 20px;
    color: #555;
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: 16px;
    p,span {
      background: linear-gradient(180deg, #FFC0F3 0%, #F0E3FF 150%);
      padding: 2px 6px;
      border-radius: 4px;
    }
  }
  
`;

const SmallParagraph = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 16px;
  font-weight: 400;
`;

const Highlight = styled.span`
  background: linear-gradient(180deg, #FFC0F3 0%, #F0E3FF 150%);
  padding: 2px 6px;
  border-radius: 4px;
 
`;


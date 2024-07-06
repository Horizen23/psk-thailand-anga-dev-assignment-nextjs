'use client'
import Image from "next/image";
import LayoutContainer from "@/component/LayoutContainer";
import styled from "styled-components";
import React from 'react';
type PartnershipOverviewProps = {
  heading: string;
  largeParagraph: string;
  smallParagraph: string;
  images: {
    mainImageUrl: string;
    imagesInText: {
      imageUrl1: string;
      imageUrl2: string;
    };
  };
};

const PartnershipOverview: React.FC<PartnershipOverviewProps> = ({
  heading,
  largeParagraph,
  smallParagraph,
  images,
}) => {
  return (
    <LayoutContainerWrapper>
      <TextWrap>
        <Heading>{heading}</Heading>
        <LargeParagraph dangerouslySetInnerHTML={{ __html: largeParagraph }} />
        <SmallParagraph>{smallParagraph}</SmallParagraph>
        <ImageWrapInText>
          <Image
            src={images.imagesInText.imageUrl1}
            alt=""
            width={169}
            height={171}
            priority
          />
          <Image
            src={images.imagesInText.imageUrl2}
            alt=""
            width={94}
            height={98}
            priority
          />
        </ImageWrapInText>
      </TextWrap>
      <ImageWrap>
        <Image
          src={images.mainImageUrl}
          alt=""
          width={528}
          height={585}
          priority
        />
      </ImageWrap>
    </LayoutContainerWrapper>
  );
};

export default PartnershipOverview;
const ImageWrapInText = styled.div`
margin-top:77px;
position: relative;
${({theme})=>theme.style.mediaWidth.mobile`
position: unset;
       `}
img:first-child {
  position: absolute;
    top: -120px;
    left: -240px;
    ${({theme})=>theme.style.mediaWidth.mobile`
    top: 59px;
    left: 0px;

       `}
       }
       img:nth-child(2) {
        color: transparent;
        float: inline-end;
        margin-right: 36px;
       }
`
const ImageWrap = styled.div`
       margin-right: -380px;

       ${({theme})=>theme.style.mediaWidth.mobile`
       max-width: 100%;
    height: auto;
    margin-left: 80px;
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
    display: flex;
        flex-direction: column-reverse;
        position: relative;
`}
`;

const Heading = styled.h2`
  font-size: 34px;
  color: #333;
  margin-bottom: 16px;
  font-weight: 600;
`;

const LargeParagraph = styled.p`
  & , span,p {
    font-size: 20px;
    color: #555;
    line-height: 1.6;
    font-weight: 400;
    margin-bottom: 16px;
    span,p {
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




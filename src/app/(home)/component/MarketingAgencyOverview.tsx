'use client'
import Button from '@/component/Navbar/Button';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import LayoutContainer from '@/component/LayoutContainer';

type MarketingAgencyOverviewProps = {
  bgImage: string,
  bgImageMobile: string,
  image: string,
  heading: string,
  subheadings: string[],
};

const MarketingAgencyOverview = ({
  bgImage,
  bgImageMobile,
  image,
  heading,
  subheadings,
}: MarketingAgencyOverviewProps) => {
  return <BusinessSelection4>
    <ImageContainer >
      <Image src={bgImage} alt={''} 
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', }} // optional
      />
      <Image src={bgImageMobile} alt={''}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', }} // optional
      />
    </ImageContainer>
    <LayoutContainerWrapper>
      <WrapperContent>
        <WrapperImage>
        <Image
            src={image}
            alt=""
            width={545.86500}
            height={333.58500}
            priority
            />
            <ImageContainer1/>
      </WrapperImage>
        <WrapperText>
          <Heading>{heading}</Heading>
          {subheadings.map((s, i) => (
            <Subheading key={i}>{s}</Subheading>
          ))}
        </WrapperText>
      </WrapperContent>
    </LayoutContainerWrapper>
  </BusinessSelection4>
};
 const ImageContainer1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(to left, #000000b8 0%, rgba(0, 0, 0, 0) 80%);
  filter: blur(20px);
`
export const ImageContainer = styled.div`
    z-index: -1;
  position: absolute;
  width: 100%; 
  height: auto;
  display: inline-block; 
 img {
  display: block;
  width: 100%;
  height: auto;
}
& > img:nth-child(1) {
  display: block;
  }
& > img:nth-child(2) {
  display: none;
  }
${({ theme }) => theme.style.mediaWidth.mobile`
& > img:nth-child(1) {
  display: none;
  }
& > img:nth-child(2) {
  display: block;
  }
`}

`;
export const BusinessSelection4 = styled.div`
  position: relative;
  overflow: hidden;
`;
const Heading = styled.h2`
  font-size: 40px;
  margin-bottom: 16px;
  font-weight: 400;
`;

const Subheading = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
`;
const LayoutContainerWrapper = styled(LayoutContainer)`
margin-top:176px;
margin-bottom:76px;
${({ theme }) => theme.style.mediaWidth.mobile`
  margin-top:68px;
`}
`;
const WrapperImage = styled.div`
width :50%;
display: flex;
    justify-content: flex-end;
    align-items: center;
    ${({ theme }) => theme.style.mediaWidth.mobile`
width :100%;
`}
`;
const WrapperText = styled.div`
width :50%;
${({ theme }) => theme.style.mediaWidth.mobile`
width :100%;
`}
`;
const WrapperContent = styled.div`
${({ theme }) => theme.style.flexRowNoWrap}
${({ theme }) => theme.style.mediaWidth.mobile`
 ${theme.style.flexColumnNoWrap}
`}
`;

export default MarketingAgencyOverview;


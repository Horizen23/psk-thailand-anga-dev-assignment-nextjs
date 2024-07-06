'use client'
import LayoutContainer from '@/component/LayoutContainer';
import React from 'react';
import styled from 'styled-components';
import CardGrid from './CardGrid';
import Image from "next/image";

type StatisticsProps = {
  heading: string;
  subheading: string;
  organizationsText: string;
  images: string[];
};

const OurStatistics = ({
  heading,
  subheading,
  organizationsText,
  images,
}: StatisticsProps) => {
  return (
    <LayoutContainerWrapper>
      <Heading>{heading}</Heading>
      <Subheading>{subheading}</Subheading>
      <CardGrid />
      <Subheading1>{organizationsText}</Subheading1>
      <WrapperImage>
        {images.map((img , i)=>(
          <img src={img}  key={i}/>
        ))}
    </WrapperImage>
    </LayoutContainerWrapper>
  );
};

export default OurStatistics;
const LayoutContainerWrapper = styled(LayoutContainer)`
margin-top:76px;
${({theme})=>theme.style.mediaWidth.mobile`
  margin-top:68px;
`}
`;


const WrapperImage = styled.div`
  margin-left: calc((100vw - 948px + 60px) / 2 * -1);
  margin-right: calc((100vw - 948px + 60px) / 2 * -1);
  ${({theme})=>theme.style.flexRowNoWrap}
  gap: 140px;
  margin-bottom: 120px;
  justify-content: center;
`;
const Heading = styled.h2`
  font-size: 18px;
      text-align: center;
  margin-bottom: 20px;
`;

const Subheading = styled.h3`
  font-size: 34px;
      text-align: center;
  margin-bottom: 42px;
  font-weight: 400;
`;
const Subheading1 = styled.h5`

  font-size: 14px;
      text-align: center;
  margin-bottom: 43px;
`;

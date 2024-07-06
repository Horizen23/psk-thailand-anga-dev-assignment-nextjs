'use client'
import Image from "next/image";
import LayoutContainer from "@/component/LayoutContainer";
import styled from "styled-components";
import Carousel from "@/component/Carousel";

type OurTeamProps = {
  mainTitle: string;
  mainTitleSpan: string;
  description: string;
  imageUrl: string;
  expertTeam: ExpertTeamProps;
};

export default function OurTeam({
  mainTitle,
  mainTitleSpan,
  description,
  imageUrl,
  expertTeam,
}: OurTeamProps) {
  return (
    <LayoutContainerWrapper>
      <OurTeamInfoWrap>
        <OurTeamTextWrap>
          <MainTitle>
            {mainTitle}
            <span>{mainTitleSpan}</span>
          </MainTitle>
          <Description>{description}</Description>
        </OurTeamTextWrap>
        <OurTeamImageWrap>
          <Image
            src={imageUrl}
            alt="team"
            width={978}
            height={596}
            priority
          />
        </OurTeamImageWrap>
      </OurTeamInfoWrap>
      <ExpertTeam {...expertTeam} />
    </LayoutContainerWrapper>
  );
}

type ExpertTeamProps = {
  expertTeamTitle: string;
  expertTeamDescription: string;
};

export function ExpertTeam({
  expertTeamTitle,
  expertTeamDescription,
}: ExpertTeamProps) {
  return (
    <ExpertTeamWrapper>
      <ExpertTeamTitle>{expertTeamTitle}</ExpertTeamTitle>
      <ExpertTeamDescription>{expertTeamDescription}</ExpertTeamDescription>
      <WrapperCarousel />
    </ExpertTeamWrapper>
  );
}


const WrapperCarousel = styled(Carousel)`
  margin-top:55px;
  padding-bottom:150px;
  ${({theme})=>theme.style.mediaWidth.mobile`
  padding-bottom:74px;
`}
`;
const LayoutContainerWrapper = styled(LayoutContainer)`
  margin-top:150px;
  ${({theme})=>theme.style.mediaWidth.mobile`
  margin-top:74px;
`}
`;

const OurTeamTextWrap = styled.div`

  width : 50%;
  max-width: 548px;
  ${({theme})=>theme.style.mediaWidth.mobile`
  width : 100%;
  max-width: unset;
`}
`;
const OurTeamImageWrap = styled.div`
margin-top:72px;
img {
  width : 100%;
  height : auto;
}
 
`;
const OurTeamInfoWrap = styled.div`
  ${({theme})=>theme.style.flexColumnNoWrap}
`;


const ExpertTeamWrapper = styled.div`
margin-top:148px;
${({theme})=>theme.style.mediaWidth.mobile`
  margin-top:74px;
`}
`;
const ExpertTeamTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 1rem;
      text-align: center;
   font-weight: 400;
`;
const ExpertTeamDescription= styled.h2`
  font-size: 18px;
  margin-bottom: 1rem;
   font-weight: 400;
       text-align: center;
       max-width: 630px;
       margin: 0 auto;
`;
const MainTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 1rem;
   font-weight: 400;
   span {
    margin-left: 12px;
    font-size: 50px;
    margin-bottom: 1rem;
    font-weight: 400;
    text-align: center;
    background: linear-gradient(45deg, #7910FF, #FF00CC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
   }
`;

const Description = styled.h2`
  font-size: 22px;
  line-height: 1.6;
   font-weight: 400;
`;

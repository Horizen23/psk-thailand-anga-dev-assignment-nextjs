'use client'
import Image from "next/image";
import LayoutContainer from "@/component/LayoutContainer";
import styled from "styled-components";

interface AboutUsProps {
  slogan: string;
  mainTitle: string;
  description: string;
  imageUrl: string;
}

 const AboutUs: React.FC<AboutUsProps> = ({ slogan, mainTitle, description, imageUrl }) => {
  return (
    <LayoutContainerWrapper>
      <AboutInfoWrap>
        <AboutTextWrap>
          <Slogan>{slogan}</Slogan>
          <MainTitle>{mainTitle}</MainTitle>
          <Description>{description}</Description>
        </AboutTextWrap>
        <AboutImageWrap>
          <Image
            src={imageUrl}
            alt="about"
            width={671}
            height={583}
            priority
          />
        </AboutImageWrap>
      </AboutInfoWrap>
    </LayoutContainerWrapper>
  );
}
export default AboutUs

const LayoutContainerWrapper = styled(LayoutContainer)`
 padding-top: ${({theme})=>theme.size.height.Navbar + 50}px;
`;
const Spacer = styled.div`
  height: 130px;
`;
const AboutTextWrap = styled.div`
  margin-top:130px;
  width : 50%;
  ${({theme})=>theme.style.mediaWidth.mobile`
      width: unset;
        margin-top:0px;
`}
  max-width: 548px;
`;
const AboutImageWrap = styled.div`

  width : 50%;
  position: relative; 

  img {
    margin-top: 50px;
    margin-left: 15%;
    ${({theme})=>theme.style.mediaWidth.mobile`
    height: 307px;
    width: auto;
      color: transparent;
    position: unset;
    margin-left: 60px;
  `}
  }


`;
const AboutInfoWrap = styled.div`
  ${({theme})=>theme.style.flexRowNoWrap}
  justify-content: space-between;
${({theme})=>theme.style.mediaWidth.mobile`
  ${({theme})=>theme.style.flexColumnNoWrap}
`}
`;

const Slogan = styled.p`
  font-size: 16px;
  margin-bottom: 1rem;
`;

const MainTitle = styled.h1`
  font-size: 50px;
  margin-bottom: 1rem;
   font-weight: 400;
`;

const Description = styled.h2`
  font-size: 22px;
  line-height: 1.6;
   font-weight: 400;
`;

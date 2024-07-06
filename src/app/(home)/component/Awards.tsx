'use client'
import LayoutContainer from "@/component/LayoutContainer";
import styled from "styled-components";

type PropsAward = {
  icon?: React.ReactNode;
  text: string;
};

type PropsAwards = {
  title: string;
  awards: PropsAward[];
};

export default function Awards({ title, awards }: PropsAwards) {
  return (
    <LayoutContainerWrapper>
      <AwardsInfoWrap>
        <AwardsTextWrap>
          <MainTitle>{title}</MainTitle>
        </AwardsTextWrap>
        <AwardList>
          {awards.map((award, index) => (
            <Award icon={award.icon} text={award.text} key={index} />
          ))}
        </AwardList>
      </AwardsInfoWrap>
    </LayoutContainerWrapper>
  );
}

function Award({ icon, text }: PropsAward) {
  return (
    <AwardCard>
      {icon && <AwardCardIconWrapper>{icon}</AwardCardIconWrapper>}
      <p>{text}</p>
    </AwardCard>
  );
}

const LayoutContainerWrapper = styled(LayoutContainer)`
margin-top:76px;
${({theme})=>theme.style.mediaWidth.mobile`
  margin-top:68px;
`}
`;

const AwardList = styled.div`
 ${({theme})=>theme.style.flexRowNoWrap}
 gap: 79px;
 margin-bottom:12px;
 ${({theme})=>theme.style.mediaWidth.mobile`
  ${({theme})=>theme.style.flexColumnNoWrap}
      gap: 34px;
 `}
`;
const AwardCard = styled.div`
 font-size: 12px;
 max-width : 132px;
 text-align: center;
 ${({theme})=>theme.style.mediaWidth.mobile`
  ${({theme})=>theme.style.flexRowNoWrap}
  gap:20px;
  text-align: unset;
  max-width: 300px;
 `}
`;
const AwardCardIconWrapper = styled.div`
`;
const AwardsTextWrap = styled.div`
  margin-bottom:45px;
  width : 50%;
  max-width: 548px;
`;

const AwardsInfoWrap = styled.div`
  align-items: center;
 ${({theme})=>theme.style.mediaWidth.mobile`
  ${({theme})=>theme.style.flexColumnNoWrap}
 `}
`;

const MainTitle = styled.h1`
  font-size: 26px;
  margin-bottom: 1rem;
   font-weight: 400;
   ${({theme})=>theme.style.mediaWidth.mobile`
    

   `}
`;


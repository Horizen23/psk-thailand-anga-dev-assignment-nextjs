'use client'
import React from 'react';
import styled from 'styled-components';
import Button from '../Navbar/Button';
import Input from '../Navbar/Input';

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #fff;
  padding: 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  padding: 96px 30px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;
const SectionTop = styled(Section)`
  display:flex;
  gap: 80px;
  ${({ theme }) => theme.style.mediaWidth.mobile`
${theme.style.flexColumnNoWrap}
    gap: 10px;
`}

`
const SectionBottom = styled(Section)`
padding: 37px 0;
border-top: 1px solid #D3D3D3;
`

const WrapperBrand = styled.div`
  ${({ theme }) => theme.style.flexColumnNoWrap}
  margin-bottom: 40px;
  flex:1;
  gap:28px;
  img {
    width: 184px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    max-width: 600px;
  }
`;

const WrapperContent = styled.div`
  flex:1;
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.style.mediaWidth.mobile`
${theme.style.flexColumnNoWrap}
        gap: 20px;
`}
`;

const ContentListWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 400;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const SocialWrapper = styled.div`
${({ theme }) => theme.style.flexRowNoWrap}
gap: 20px;
${({ theme }) => theme.style.mediaWidth.mobile`
width: 100%;
justify-content: space-evenly;
`}
`
const ButtonSocial = styled.a`
font-size:16px;
font-weight: 400;
display: flex;
    align-items: center;
    text-align: center;
    gap:10px;
`
const ContactSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.style.mediaWidth.mobile`
${theme.style.flexColumnNoWrap}
`}
`;
const PolicyWrapper = styled.div`
 text-align:right;
 ${({ theme }) => theme.style.flexRowNoWrap}
 gap: 20px;
 P {
  color:#D3D3D3;
  font-size:14px;
 }

 ${({ theme }) => theme.style.mediaWidth.mobile`
 text-align: start;
 display: flex;
 flex-flow: row nowrap;
 gap: 6px;
 flex-direction: column;
 width: 100%;
 margin-top: 40px;
 `}
`;

// const content = [
//   {
//     title: "บริการของเรา",
//     items: [
//       "บริการ SEO",
//       "บริการ Google Ads",
//       "บริการ Social Media",
//     ]
//   },
//   {
//     title: "ข่าวการตลาด",
//     items: [
//       "ข่าวการตลาดออนไลน์",
//       "ความรู้ SEO",
//       "ความรู้ Advertising",
//     ]
//   },
//   {
//     title: "รู้จักกับเรา",
//     items: [
//       "เกี่ยวกับเรา",
//       "ผลงานของเรา",
//       "ร่วมทีมกับเรา",
//       "ติดต่อเรา",
//     ]
//   }
// ];
type Contents = {
  title: string;
  items: ContentsImage[];
}
type ContentsImage = {
  text: string;
}
type socialMedia = {
  text: string;
  icon: string
}
export interface FooterProps {
  contents: Contents[]
  header: string
  image: string
  placeholder: string
  buttonTex: string
  socialMedia: socialMedia[]
}

const Footer : React.FC<FooterProps>= ({image,contents, header, placeholder, buttonTex,socialMedia}) => {
 
  return (
    <FooterContainer>
      <FooterContent>
        <SectionTop>
          <WrapperBrand>
            <img src={image} alt="Icon" />
            <p>{header}</p>
            <Input placeholder={placeholder} buttonTex={buttonTex} />
          </WrapperBrand>
          <WrapperContent>
            {contents.map((c, i) => (
              <ContentListWrapper key={i}>
                <h3>{c.title}</h3>
                <ul>
                  {c.items.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </ContentListWrapper>
            ))}
          </WrapperContent>
        </SectionTop>
        <SectionBottom>
          <ContactSection>
            <SocialWrapper>
              {socialMedia.map((s,i)=>(
                 <ButtonSocial key={i}>
                    <img src={s.icon} alt="Icon" />
                    {s.text}
               </ButtonSocial>
              ))}
            </SocialWrapper>
            <PolicyWrapper>
              <p>นโยบายความเป็นส่วนตัวและข้อมูล</p>
              <p>Copyright © Adchariya. All Rights Reserved.</p>
            </PolicyWrapper>
          </ContactSection>
        </SectionBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

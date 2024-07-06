'use client'
import Button from '@/component/Navbar/Button';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

type PromoProps = {
  imageSrc: string;
  heading: string;
  subheading: string;
  inputPlaceholder: string;
  strategyButtonText: string;
  phoneButtonText: string;
  buttonText: string;
};

const SmartAgencyPromo = ({
  imageSrc,
  heading,
  subheading,
  inputPlaceholder,
  strategyButtonText,
  phoneButtonText,
  buttonText,
}: PromoProps) => {
  return (
    <PromoContainer>
      <ContentImage>
        <Image
          src={imageSrc}
          alt=""
          width={706}
          height={416}
        />
      </ContentImage>
      <ContentText>
        <PromoText>{heading}</PromoText>
        <SubPromoText dangerouslySetInnerHTML={{ __html: subheading }} />
        <ContactForm>
          <Input type="text" placeholder={inputPlaceholder} />
          <Button text={strategyButtonText} />
        </ContactForm>
        <ButtonGroup>
          <Button text={phoneButtonText} variant="outline" />
          <Button text={buttonText} variant="outline" />
        </ButtonGroup>
      </ContentText>
    </PromoContainer>
  );
};

export default SmartAgencyPromo;

const ContentImage = styled.div`
  width: 40%;
img {
  margin-left: -20px;
  margin-bottom: -30px;
  
}
`
const ContentText = styled.div``
const PromoContainer = styled.div`
    background: white;
    border-radius: 30px;
    box-shadow: 0px 4px 46.6px -21px #000000;
${({theme})=>theme.style.flexRowNoWrap}
  max-width: 948px;
  width: 100%;
  height:436px;
  margin: auto;
  text-align: center;
  padding: 20px;
`;

const PromoText = styled.p`
  font-size: 28px;
  font-weight: 400;
  color: #000000;
  margin-bottom: 20px;
`;
const SubPromoText = styled.p`
  font-size: 16px;
  color: #000000;
  margin-bottom: 20px;
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;


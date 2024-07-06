import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Navbar/Button';
import Image from 'next/image';

interface _StepContentInfoProps {
  stepNo : number;
  title: string;
  subTitle: string;
  image: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
}
export type  StepContentInfoProps = Omit<_StepContentInfoProps, 'stepNo'> 

const StepContentInfo: React.FC<_StepContentInfoProps> = ({
  stepNo,
  title: stepTitle,
  subTitle:subStepTitle,
  buttonText,
  image,
  onButtonClick,
}) => {
  let isTextLeft = stepNo % 2 == 1 
  return (
    <Step  content={isTextLeft ? "start" : "end" }>
      <StepWrapperImage>{image}</StepWrapperImage>
      <StepContentText content={isTextLeft ? "start" : "end" }>
        <StepNo>{stepNo}</StepNo>
        <StepContent>
          <StepTitle>{stepTitle}</StepTitle>
          <SubStepTitle>{subStepTitle}</SubStepTitle>
          {buttonText && (
            <SubStepButton  text={buttonText} onClick={onButtonClick}/>
          )}
        </StepContent>
      </StepContentText>
  </Step>
  );
};

const StepWrapperImage = styled.div`
${({theme})=>theme.style.mediaWidth.mobile`
    display: none;
`}
`;
const Step = styled.div<{content: "start"|"end"}>`
  gap: 320px;
${({theme})=>theme.style.flexRowNoWrap}
    justify-content: space-evenly;
    width: 100%;
    ${({content})=>content === "start" ? 
  css`
  ` : css`
  flex-flow: row-reverse;

  
 
  `}
`;
const StepContentText = styled.div<{content: "start"|"end"}>`
  width: 311px; /* Adjust width as needed */
  ${({theme})=>theme.style.flexColumnNoWrap}
  ${({content})=>content === "start" ? 
  css`
        align-items: flex-start;
  ` : css`
  
  align-items: flex-end;
  text-align: end;
  ${({theme})=>theme.style.mediaWidth.mobile`
     align-items: flex-start;
  text-align: start;
`}
 
  `}
`;

const StepNo = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  text-align: center;
  border: 3px solid #000000;
  font-size: 20px;
  color: #000000;
  font-weight: 600;
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StepTitle = styled.div`
  margin-top: 17px;
  font-size: 26px;
  color: #000000;
  font-weight: 600;
`;

const SubStepTitle = styled.div`
  margin-top: 16px;
  font-size: 16px;
  color: #000000;
  font-weight: 400;
`;

const SubStepButton = styled(Button)`
  margin-top: 16px;
  background: linear-gradient(30deg, #000000, #7910FF);
  color: white;
`;

const VerticalProgressBar = ({ completed, steps }: { completed: number ,steps: StepContentInfoProps[]}) => {
  return (
    <ProgressBarContainer>
      <Steps>
      {steps.map((step, index) => (
          <StepContentInfo
            key={index}
            stepNo={index + 1}
            title={step.title}
            subTitle={step.subTitle}
            buttonText={step.buttonText}
            image={step.image}
            onButtonClick={step.onButtonClick}
          />
        ))}
      </Steps>
      <Filler style={{ height: `${completed}%` }}>
        <Dot />
      </Filler>
    </ProgressBarContainer>
  );
};

export default VerticalProgressBar;


const ProgressBarContainer = styled.div`
  width: 100%; /* Adjust as needed */
  height: 100%; /* Adjust as needed */
  margin: 50px 0;
  position: relative;
  &::before {
  content: " ";
  width: 3px; /* Adjust as needed */
  height: 100%; /* Adjust as needed */
  background-color: #e0e0df;
  border-radius: 50px;
  position: absolute;
  left: 50%;
  ${({theme})=>theme.style.mediaWidth.mobile`
   left: 5%;
    `}
  }
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 145px;
    ${({theme})=>theme.style.mediaWidth.mobile`
    gap: 80px;
    `}
    
`;

const Filler = styled.div`
    width: 3px; /* Adjust as needed */
  height: 0;
  background: linear-gradient(0deg, #7910FF, #FF00CC);
  border-radius: inherit;
  text-align: right;
  transition: height 0.5s ease-in-out;
  position: absolute;
  left: 50%;
  ${({theme})=>theme.style.mediaWidth.mobile`
   left: 5%;
    `}
  top: 0;
`;

const Dot = styled.span`
  height: 16px; /* Adjust dot size */
  width: 16px; /* Adjust dot size */
  background: #7910FF;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  bottom: -8px; /* Adjust distance from progress bar */
  left: 50%;
  transform: translateX(-50%);
`;

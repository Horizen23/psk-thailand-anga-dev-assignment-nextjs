'use client'
import LayoutContainer from '@/component/LayoutContainer';
import ProgressBar, { StepContentInfoProps } from '@/component/ProgressBar';
import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import FormSubmissionModal from './FormSubmissionModal';

interface WorkflowStepsProps {
  completed: number;
  steps: (Omit<StepContentInfoProps, "image"> & {image: string})[];
  description: string;
  title: string;
}

const WorkflowSteps: React.FC<WorkflowStepsProps> = ({ completed, steps: _steps, description, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButtonClick = () => {
    console.log('Button clicked!');
    setIsModalOpen(true)
  };
  const steps: StepContentInfoProps[] = _steps.map(v=>({
    title :v.title,
    subTitle :v.subTitle,
    image: <Image
        src={v.image}
        alt="Logo"
        width={225}
        height={225}
    />,
    buttonText :v.buttonText,
    onButtonClick : handleButtonClick,
  }))
  return (
    <LayoutContainerWrapper>
      <Description>{description}</Description>
      <Title>{title}</Title>
      <ProgressBar completed={completed} steps={steps} />
      <FormSubmissionModal
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
      />
    </LayoutContainerWrapper>
  );
};

export default WorkflowSteps;
const LayoutContainerWrapper = styled(LayoutContainer)`
margin-top: 76px;
`


const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  max-width: 456px;
  margin: 0 auto;
  color: #000000;
      text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  margin-top: 10px;
  color: #000000;
      text-align: center;
`;

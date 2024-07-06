'use client'
import React from 'react';
import styled from 'styled-components';

export interface LayoutContainerProps {
         padding?: string;
         margin?: string;
         backgroundColor?: string;
         children: React.ReactNode;
}
const LayoutContainer: React.FC<LayoutContainerProps> = ({ 
  padding = '', 
  margin = '0 auto', 
  backgroundColor = '#000000', 
  children,
  ...props
}) => {
  return (
    <StyledContainer {...props} $padding={padding} $margin={margin} $backgroundColor={backgroundColor}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ $padding: string; $margin: string; $backgroundColor: string }>`
  padding-inline: ${({ $padding }) => $padding};
  margin: ${({ $margin }) => $margin};
  /* background-color: ${({ $backgroundColor }) => $backgroundColor}; */
  color : white;

  max-width: 948px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  padding: 0 30px;
  clear: both;
`;

export default LayoutContainer;

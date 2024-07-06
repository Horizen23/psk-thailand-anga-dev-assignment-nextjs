
import React from 'react';
import styled, { css } from 'styled-components';


export interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'children' | 'type'> {
  variant?: 'outline' | 'default';
  icon?: React.ReactNode;
  text: string;
  type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', icon, text, type = 'button', ...props }) => {
return (
  <StyledButton $variant={variant} type={type} {...props}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <p>{text}</p>
  </StyledButton>
);
};
const IconWrapper = styled.span`
  margin-right: 0.5em;
  display: flex;
  align-items: center;
`;
const StyledButton = styled.button<{ $variant: 'outline' | 'default' }>`

  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  font-size: 14px;
  border-radius: 64px;
  cursor: pointer;

  ${({ $variant }) =>
    $variant === 'outline' &&
    css`
      background: transparent;
      border: 2px solid #fff;
      color: #fff;
    `}

  ${({ $variant }) =>
    $variant === 'default' &&
    css`
      background: #fff;
      border: none;
      color: #000000;
    `}

    ${({theme, $variant})=>theme.style.mediaWidth.mobile`
     font-size: 14px;
     ${$variant === 'outline' &&
    css`
      padding : 0px;
      background: transparent;
      border: none;
      color: #fff;
      > p {
      display: none;
      }
      ${IconWrapper}  img {
        width: 27px;
        height: 27px;
      }
    ` }
  `}
`;



export default Button;

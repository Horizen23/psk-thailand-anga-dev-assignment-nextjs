import React from 'react';
import styled from 'styled-components';

const Newsletter = ({placeholder="Assine nossa Newsletter",buttonTex="OK"}:{placeholder:string,buttonTex:string}) => {
  return (
    <NewsletterContainer>
      <form action="">
        <FormInput>
          <Input type="email" placeholder={placeholder} required />
          <i></i>
        </FormInput>
        <FormButton>
          <SubmitButton type="submit">{buttonTex}</SubmitButton>
        </FormButton>
      </form>
     
    </NewsletterContainer>
  );
};

export default Newsletter;

const NewsletterContainer = styled.div`
  position: relative;
`;

const FormInput = styled.div`
  display: inline-block;
  float: left;
  width: 85%;
`;

const Input = styled.input`
  width: 100%;
  height: 54px;
  line-height: 1.42857143;
  padding-left: 35px;
  color: #333;
  text-transform: uppercase;
  font-size: 0.8125em;
  letter-spacing: 0.075em;
  border: 1px solid #d6d6d6;
  box-sizing: border-box;
  outline: 0;
`;

const FormButton = styled.div`
  display: inline-block;
  float: left;
  width: 15%;
`;

const SubmitButton = styled.button`
  background: #333;
  color: #fff;
  line-height: 1.33;
  font-size: 1.0625em;
  display: inline-block;
  padding: 15px 20px;
  margin-bottom: 0;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  border: 1px solid #333;
  letter-spacing: 0.075em;
  width: 100%;
  height: 54px;
  cursor: pointer;
  &:hover {
    background: #222;
    transition: all 0.4s ease-out;
  }
`;


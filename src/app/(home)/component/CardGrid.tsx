'use client'
import React from 'react';
import styled from 'styled-components';

const CardGrid = () => {
  return (
    <GridContainer>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
    </GridContainer>
  );
};

const SingleCard = () => {
         return (
           <Card>
             <CardContentTitle>50+</CardContentTitle>
             <CardContent>ผู้เชี่ยวชาญในสายงาน</CardContent>
             <CardBTN>ดูทีมแอดฉริยะ

                  <Arrow/>
             </CardBTN>
           </Card>
         );
       };
export default CardGrid;

const Arrow = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={8}
    fill="none"
    {...props}
  >
    <path
      fill="#F0C"
      d="M9.002 4.323a.457.457 0 0 0 0-.646L6.095.77a.457.457 0 0 0-.646.646L8.033 4 5.449 6.584a.457.457 0 1 0 .646.646l2.907-2.907ZM0 4.457h8.679v-.914H0v.914Z"
    />
  </svg>
)

const GridContainer = styled.div`
  margin-bottom: 107px;

  display: grid;
  grid-template-columns: repeat(3, 1fr); 

  /* 3 columns */
  grid-gap: 20px;
   ${({theme})=>theme.style.mediaWidth.mobile`
  grid-template-columns: repeat(2, 1fr); 

  grid-template-areas:
        "item1 item2"
        "item3 item4"
        "item5 item5"
        "item6 item6";

  & > div:nth-child(1) {
    grid-area: item1;
    width: 100%;
    place-self: stretch;
  }

  & > div:nth-child(2) {
    grid-area: item2;
    width: 100%;
    place-self: stretch;
  }

  & > div:nth-child(3) {
    grid-area: item3;
    width: 100%;
    place-self: stretch;
  }

  & > div:nth-child(4) {
    grid-area: item4;
    width: 100%;
    place-self: stretch;
  }

  & > div:nth-child(5) {
    grid-area: item5;
    width: 100%;
    place-self: stretch;
  }

  & > div:nth-child(6) {
    grid-area: item6;
    width: 100%;
    place-self: stretch;
  }
   `}

`;

const Card = styled.div`
  border: 0.9px solid #FFFFFF;
  border-radius: 23.75px;
  padding: 20px;
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #ffffff;
`;
const CardContentTitle = styled.p`
  font-size: 48px;
  font-weight: 400;
       margin-bottom: 14px;
  color: #ffffff;
`;
const CardBTN = styled.p`
  font-size: 12px;
  font-weight: 400;

  color: #FF00CC;
  svg {
         margin-left:6px
  }
`;

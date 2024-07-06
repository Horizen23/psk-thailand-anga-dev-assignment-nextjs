import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const CarouselInner = styled.div<{ $translateX: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ $translateX }) => `$translateX(-${$translateX}%)`};

`;

const CarouselCard = styled.div<{ $isActive: boolean }>`
  min-width: calc(100% / 4.5);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  border-radius: 10px;
  overflow: hidden;
  transform: ${({ $isActive }) => ($isActive ? 'scale(1.1)' : 'scale(1)')};
  transition: transform 0.3s ease-in-out;
  background: ${({ $isActive }) => ($isActive ? '#fff' : '#f0f0f0')};
  position: relative;
`;

const CardContent = styled.div<{ $isActive: boolean }>`
    position: absolute;
    bottom: 0px;
  padding: 20px;
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
  h2 {
         font-size: 22px;
         font-weight: 400;
         color: #000000;
  }
  p {
         font-size: 14px;
         color: #000000;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 270px;
  img {
         width: 100%;
  height: 270px;

           object-fit: cover;
  }
`;

const WrapButton = styled.div`
    text-align: center;
    ${({theme})=>theme.style.flexRowNoWrap}
    gap:10px;
    justify-content: center;
    padding: 14px;

`;
const Bar = styled.button <{ $isActive: boolean }>`
    border: none;
    background:${({ $isActive }) => ($isActive ? '#ffffff' : '#575555')}; ;
    border-radius: 120px;
    cursor: pointer;
    height: 2px;
    width: 22px;
    align-self: center;
`;
const ImageBg = styled(Image)<{ $isActive: boolean }>`
 display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
  position: absolute;
    z-index: 0;
    bottom: -40px;
    left: 19px;
    filter: blur(44px);
`;

const Carousel = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState<NodeJS.Timeout | null>(null);

  const cards = [
    {
      id: 1,
      title: "Grip Thanabut 1",
      image: "https://via.placeholder.com/400",
      description: "Digital Strategist 1.",
    },
    {
      id: 2,
      title: "Grip Thanabut 2",
      image: "https://via.placeholder.com/400",
      description: "Digital Strategist 2.",
    },
    {
      id: 3,
      title: "Grip Thanabut 3",
      image: "https://via.placeholder.com/400",
      description: "Digital Strategist 3.",
    },
    {
      id: 4,
      title: "Grip Thanabut 4",
      image: "https://via.placeholder.com/400",
      description: "Digital Strategist 4.",
    },
    {
      id: 5,
      title: "Grip Thanabut 5",
      image: "https://via.placeholder.com/400",
      description: "Digital Strategist 5.",
    },
    {
      id: 6,
      title: "Grip Thanabut 6",
      image: "https://via.placeholder.com/400",
      description: "Digital Strategist 6.",
    },
  ];

  const startAutoSlide = () => {

  };

  const stopAutoSlide = () => {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      setAutoSlideInterval(null);
    }
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide(); 
    };
  }, []);

  return (
    <div {...props}>
      <CarouselContainer>
        <CarouselInner $translateX={currentIndex * (100 / 4.5)}>
          {cards.map((card, index) => (
            <CarouselCard key={card.id} $isActive={currentIndex === index}>
              <CardImage>

              <Image
              src="/Rectangle 1128.png"
              alt={""}
              width={270}
              height={321}
              priority
              />
              </CardImage>
              <ImageBg $isActive={currentIndex === index}
              src="/graphic-07 1.png"
              alt={"graphic"}
              width={320}
              height={340}
              priority
              />
              <CardContent $isActive={currentIndex === index}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </CardContent>
            </CarouselCard>
          ))}
        </CarouselInner>
      </CarouselContainer>
      <WrapButton>
        <Image
        onClick={handlePrev}
             src="/Group 6172.svg"
             alt={""}
             width={31}
             height={31}
             />
               {cards.map((card, index) => (
                <Bar key={index} $isActive={currentIndex === index}/>
               ))}
         <Image
          onClick={handleNext}
              src="/Group 6171.svg"
              alt={""}
              width={31}
              height={31}
              />
     
      </WrapButton>
    </div>
  );
};

export default Carousel;

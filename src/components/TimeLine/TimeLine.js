import React, { useState, useRef, useEffect } from 'react';

import Image from 'next/image';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode ,GridContainer,ProfileIntroduction,ProfileName,ProfilePicture,CardContainer, PaddingContainer } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData, ProfileData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;




const ProfileCard = ({ picture, name, introduction }) => {
  return (
    <CardContainer>
      <ProfilePicture src={picture} alt={name} />
      <PaddingContainer>
        <ProfileName>{name}</ProfileName>
        <ProfileIntroduction>{introduction}</ProfileIntroduction>
      </PaddingContainer>
    </CardContainer>
  );
};

const ProfileCardContainer = ({ profiles }) => {
  return (
    <GridContainer>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          picture={profile.picture}
          name={profile.name}
          introduction={profile.introduction}
        />
      ))}
    </GridContainer>
  );
};

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Us</SectionTitle>
      <SectionText>
      At TrioTech Minds, we are driven by a vision to revolutionize the tech industry through cutting-edge solutions and unparalleled innovation. Behind this ambitious mission are our dynamic CEOs, Uzair Siddiqui, Ali Haider, and Jazil Ali.
      <br/>
      <br/>
      Together, Uzair Siddiqui, Ali Haider, and Jazil Ali form a formidable leadership team, combining their unique strengths and insights to drive TrioTech forward. Their unwavering dedication to excellence and innovation sets the tone for our entire team, fostering a culture of creativity, collaboration, and continuous improvement. Join us in celebrating the visionary leadership of Uzair Siddiqui, Ali Haider, and Jazil Ali, as they steer TrioTech towards a future filled with groundbreaking achievements and transformative innovations.
      </SectionText>

      <ProfileCardContainer profiles={ProfileData}/>
      <br/>
      <br/>
      <br/>


      {/* <CarouselContainer ref={carouselRef} >
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}>
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}>
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fill-opacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="white" />
                        <stop
                          offset="0.79478"
                          stop-color="white"
                          stop-opacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer> */}
      {/* <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button">
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons> */}
      <SectionDivider />
    </Section>
  );
};

export default Timeline;

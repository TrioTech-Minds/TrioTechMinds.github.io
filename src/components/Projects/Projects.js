import React,{useRef} from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Video, YouTubeEmbed, ScrollDiv, TempDiv } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projectsDev, projectsAI } from '../../constants/constants';

const Projects = () => {
  const scrollContainerRef = useRef(null);
  let scrollInterval;

  const startScrolling = (direction) => {
    const scrollAmount = direction === 'left' ? -10 : 10; // Adjust scroll speed

    scrollInterval = setInterval(() => {
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'auto' });
    }, 10); // Adjust interval for smoothness
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
  };

  const handleMouseDown = (event) => {
    const containerRect = scrollContainerRef.current.getBoundingClientRect();
    if (event.clientX < containerRect.left + 40) {
      startScrolling('left');
    } else if (event.clientX > containerRect.right - 40) {
      startScrolling('right');
    }
  };
  
  return (

  

  <Section  id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <SectionTitle style={{fontSize:'35px'}}> Development</SectionTitle>
    <TempDiv
    ref={scrollContainerRef}
    onMouseDown={handleMouseDown}
    onMouseUp={stopScrolling}
    onMouseLeave={stopScrolling}
    >
    <ScrollDiv
    >
    <GridContainer>
      {projectsDev.map((p, i) => {
        return (
          <BlogCard key={i}>
            {
              p.image != undefined ? <Img src={p.image} />: p.video != undefined ?<Video src={p.video} />: 
              <YouTubeEmbed
              src={p.videoEmd}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={p.title}
            />
            }
          
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <Hr />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            {/* <Hr /> */}
            <UtilityList>
              {p.visit != undefined &&
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              }
              {p.source != undefined &&
              <ExternalLinks href={p.source}>Source</ExternalLinks>

              }
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    </ScrollDiv>
    </TempDiv>

    <SectionTitle style={{fontSize:'35px'}} > Artificial Intelligence</SectionTitle>
    <TempDiv>
    <ScrollDiv>
    <GridContainer>
      {projectsAI.map((p, i) => {
        return (
          <BlogCard key={i}>
            {
              p.image != undefined ? <Img src={p.image} />: p.video != undefined ?<Video src={p.video} />: 
              <YouTubeEmbed
              src={p.videoEmd}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={p.title}
            />
            }
          
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <Hr />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            {/* <Hr /> */}
            <UtilityList>
              {p.visit != undefined &&
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              }
              {p.source != undefined &&
              <ExternalLinks href={p.source}>Source</ExternalLinks>

              }
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    </ScrollDiv>
    </TempDiv>

  </Section>
)
};

export default Projects;
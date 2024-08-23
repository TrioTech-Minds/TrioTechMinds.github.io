import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { BsRobot } from "react-icons/bs";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    At our company, we specialize in a wide range of technologies, including AI and NLP, web development, backend development, and mobile applications. Our expertise in these areas allows us to deliver innovative and comprehensive solutions tailored to meet the diverse needs of our clients. Whether it's developing advanced AI models, creating user-friendly web interfaces, building robust backend systems, or crafting cutting-edge mobile apps, our team is dedicated to providing top-notch services that drive success and innovation.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Next.js,  React.js<br />
            Flutter<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, Java<br/> DotNet SQL and NoSQL DBs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsRobot  size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Artificial Inteligence</ListTitle>
          <ListParagraph>
            Machine Learning , DeepLearning <br />
            Building ChatBots, LLMs and RAG Systems           
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;

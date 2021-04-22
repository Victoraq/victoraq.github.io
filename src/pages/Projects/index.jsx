import React from "react";
import styled from "styled-components";
import {
  Card,
  CardBox,
  CardHeader,
  CardParagraph,
} from "../../components/Card";
import car from "../../assets/images/car.jpg";
import { Content } from "../../UI";

const ProjectsContent = styled(Content)`
  height: auto;
  padding: 1% 5%;
`;

const Title = styled.h1`
  font-size: 3em;
  font-weight: 300;
  text-align: center;
  margin: 15px;
  color: ${({ theme }) => theme.text};
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5% 5% 0 0;
`;

const mapCards = (projectArray) => {
  return projectArray.map((project) => {
    return (
      <Card key={project.id}>
        <Image src={car} />
        <CardHeader>{project.title}</CardHeader>
        <CardParagraph>{project.content}</CardParagraph>
      </Card>
    );
  });
};

const Projects = ({ projects }) => {
  return (
    <ProjectsContent>
      <Title>Projects</Title>
      {projects.map((projectArray) => {
        return <CardBox>{mapCards(projectArray)}</CardBox>;
      })}
    </ProjectsContent>
  );
};

export default Projects;

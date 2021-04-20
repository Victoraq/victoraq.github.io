import React from "react";
import styled from "styled-components";
import { Card, CardBox, CardHeader, CardParagraph } from "../../components/Card";
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

const Projects = () => {
  return (
    <ProjectsContent>
      <Title>Projects</Title>
      <CardBox>
        <Card>
          <Image src={car} />
          <CardHeader>Backend Development</CardHeader>
          <CardParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            ultrices dui. Pellentesque porttitor blandit nunc, ac hendrerit dui
            condimentum sed. Duis elementum eros nisl, vel dictum ipsum pharetra
            non. Morbi nec nulla ligula.
          </CardParagraph>
        </Card>
        <Card>
          <Image src={car} />
          <CardHeader>Backend Development</CardHeader>
          <CardParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            ultrices dui. Pellentesque porttitor blandit nunc, ac hendrerit dui
            condimentum sed. Duis elementum eros nisl, vel dictum ipsum pharetra
            non. Morbi nec nulla ligula.
          </CardParagraph>
        </Card>
        <Card>
          <Image src={car} />
          <CardHeader>Backend Development</CardHeader>
          <CardParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            ultrices dui. Pellentesque porttitor blandit nunc, ac hendrerit dui
            condimentum sed. Duis elementum eros nisl, vel dictum ipsum pharetra
            non. Morbi nec nulla ligula.
          </CardParagraph>
        </Card>
      </CardBox>
      <CardBox>
        <Card>
          <Image src={car} />
          <CardHeader>Backend Development</CardHeader>
          <CardParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            ultrices dui. Pellentesque porttitor blandit nunc, ac hendrerit dui
            condimentum sed. Duis elementum eros nisl, vel dictum ipsum pharetra
            non. Morbi nec nulla ligula.
          </CardParagraph>
        </Card>
        <Card>
          <Image src={car} />
          <CardHeader>Backend Development</CardHeader>
          <CardParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            ultrices dui. Pellentesque porttitor blandit nunc, ac hendrerit dui
            condimentum sed. Duis elementum eros nisl, vel dictum ipsum pharetra
            non. Morbi nec nulla ligula.
          </CardParagraph>
        </Card>
      </CardBox>
    </ProjectsContent>
  );
};

export default Projects;

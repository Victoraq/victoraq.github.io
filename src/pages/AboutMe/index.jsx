import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import learning from "../../assets/images/learning.svg";
import chart from "../../assets/images/chart.svg";
import python from "../../assets/images/python.svg";
import { Content, Paragraph } from "../../UI";

const AboutMeContent = styled(Content)`
  height: auto;
`;

const Name = styled.h1`
  font-size: 3.5em;
  font-weight: 400;
  margin: 5px;
  color: ${({ theme }) => theme.text};
`;

const JobTitle = styled.h2`
  font-weight: 200;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.text};

  :after {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    margin: auto 5px;
  }
`;

const Interest = styled(JobTitle)`
  h2 {
    margin: 25px 0;
  }

  :before {
    content: "";
    flex: 1 1;
    border-bottom: 1px solid ${({ theme }) => theme.text};
    margin: auto 5px;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Icon = styled.img`
  width: 35px;
  margin: 5%;
  filter: ${({ theme }) => theme.filter};
`;

const AboutMe = () => {
  return (
    <AboutMeContent>
      <Name>Victor Aquiles Alencar</Name>
      <JobTitle>Data scientist | Backend developer</JobTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ultrices
        dui. Pellentesque porttitor blandit nunc, ac hendrerit dui condimentum
        sed. Duis elementum eros nisl, vel dictum ipsum pharetra non. Morbi nec
        nulla ligula. Aenean sit amet feugiat tellus. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam rhoncus enim dolor, in porttitor libero fringilla ac. Mauris
        dapibus, quam non pellentesque vulputate, ligula augue pellentesque dui,
        eu aliquam erat ipsum eget felis. Vestibulum pretium est orci, vitae
        placerat erat laoreet sit amet. Nullam suscipit tellus ut mi finibus,
        quis vestibulum velit consequat. Nulla non arcu id tortor porttitor
        rutrum vitae mollis tortor. Cras dignissim ullamcorper condimentum.
        Nulla facilisi. Mauris turpis nunc, dapibus at tincidunt at, luctus nec
        eros.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ultrices
        dui. Pellentesque porttitor blandit nunc, ac hendrerit dui condimentum
        sed. Duis elementum eros nisl, vel dictum ipsum pharetra non. Morbi nec
        nulla ligula. Aenean sit amet feugiat tellus. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam rhoncus enim dolor, in porttitor libero fringilla ac. Mauris
        dapibus, quam non pellentesque vulputate, ligula augue pellentesque dui,
        eu aliquam erat ipsum eget felis. Vestibulum pretium est orci, vitae
        placerat erat laoreet sit amet. Nullam suscipit tellus ut mi finibus,
        quis vestibulum velit consequat. Nulla non arcu id tortor porttitor
        rutrum vitae mollis tortor. Cras dignissim ullamcorper condimentum.
        Nulla facilisi. Mauris turpis nunc, dapibus at tincidunt at, luctus nec
        eros.
      </Paragraph>
      <Interest>Areas of Interest</Interest>
      <CardBox>
        <Card>
          <Icon src={learning} />
          <header>Machine Learning</header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            ultrices dui. Pellentesque porttitor blandit nunc, ac hendrerit dui
            condimentum sed. Duis elementum eros nisl, vel dictum ipsum pharetra
            non. Morbi nec nulla ligula.
          </Paragraph>
        </Card>
        <Card>
          <Icon src={chart} />
          <header>Data Analysis</header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            ultrices dui. Pellentesque porttitor blandit nunc, ac hendrerit dui
            condimentum sed. Duis elementum eros nisl, vel dictum ipsum pharetra
            non. Morbi nec nulla ligula.
          </Paragraph>
        </Card>
        <Card>
          <Icon src={python} />
          <header>Backend Development</header>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
            ultrices dui. Pellentesque porttitor blandit nunc, ac hendrerit dui
            condimentum sed. Duis elementum eros nisl, vel dictum ipsum pharetra
            non. Morbi nec nulla ligula.
          </Paragraph>
        </Card>
      </CardBox>
    </AboutMeContent>
  );
};

export default AboutMe;

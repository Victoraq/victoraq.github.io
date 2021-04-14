import React from "react";
import styled from "styled-components";
import profile from "../../assets/images/profile.jpg";
import github from "../../assets/images/github.svg";
import linkedin from "../../assets/images/linkedin.svg";
import scholar from "../../assets/images/scholar.png";
import { Content } from "../../UI";
import { github_url, linkedin_url, scholar_url } from "../../UI/variables";

const Name = styled.h1`
  font-size: 3.5em;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  white-space: pre-line;
`;

const JobTitle = styled.h2`
  font-weight: 200;
  color: ${({ theme }) => theme.text};
`;

const Presentation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  position: flex;
  width: 260px;
  height: 260px;
`;

const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Icon = styled.img`
  width: 35px;
  margin: 50px 20px auto 20px;
`;

const Home = () => {
  return (
    <Content>
      <Presentation>
        <div>
          <Name>{`Hi I'm \n Victor Aquiles`}</Name>
          <JobTitle>Data scientist | Backend developer</JobTitle>
        </div>
        <div>
          <ProfilePicture src={profile} alt="Profile Picture" />
        </div>
      </Presentation>
      <SocialMedias>
        <a href={github_url}>
          <Icon src={github} />
        </a>
        <a href={linkedin_url}>
          <Icon src={linkedin} />
        </a>
        <a href={scholar_url}>
          <Icon src={scholar} />
        </a>
      </SocialMedias>
    </Content>
  );
};

export default Home;

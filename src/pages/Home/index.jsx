import React from "react";
import styled from "styled-components";
import { Body } from "../../UI";

const Name = styled.h1`
  font-size: 3.5em;
  font-weight: 300;
  color: #252422;
  white-space: pre-line;
`;

const Home = () => {
  return (
    <Body>
      <Name>{`Hi I'm \n Victor Aquiles`}</Name>
    </Body>
  );
};

export default Home;

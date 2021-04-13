import React from "react";
import styled from "styled-components";


const Navigator = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #252422;
  margin: 0;
`;

const Items = styled.li`
  color: #edf2f4;
  display: inline;
  margin: 15px;
`;

const Header = () => {
  return (
    <Navigator>
      <Items>Home</Items>
      <Items>About Me</Items>
      <Items>Projects</Items>
      <Items>Experience</Items>
    </Navigator>
  );
};

export default Header;

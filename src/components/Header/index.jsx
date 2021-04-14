import React from "react";
import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitcher from "../ThemeSwitcher";

const Navigator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #252422;
  margin: 0;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #252422;
    margin: 0;
  }

`;

const Items = styled.li`
  color: #edf2f4;
  display: inline;
  margin: 15px;
`;

const Link = styled(ReactLink)`
  color: #fffcf2;
  text-decoration: none;

  :hover {
    color: #edf2f4;
  }
`;

const Header = ({ toggleTheme }) => {
  return (
    <Navigator>
      <ul>
      <Items>
        <Link to="/">Home</Link>
      </Items>
      <Items>
        <Link to="/aboutme">About Me</Link>
      </Items>
      <Items>
        <Link to="/projects">Projects</Link>
      </Items>
      <Items>
        <Link to="/experience">Experience</Link>
      </Items>
      </ul>
      < div>
      <ThemeSwitcher>
        <input type="checkbox" onChange={toggleTheme} />
        <span></span>
      </ThemeSwitcher>
      </div>
    </Navigator>
  );
};

export default Header;

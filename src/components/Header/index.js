import React from "react";
import { Link as ReactLink} from "react-router-dom";
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

const Link = styled(ReactLink)`
    color: #FFFCF2;
    text-decoration: none;

    :hover {
        color: #EDF2F4;
    }
`;

const Header = () => {
  return (
    <Navigator>
      <Items><Link to='/'>Home</Link></Items>
      <Items><Link to='/aboutme'>About Me</Link></Items>
      <Items><Link to='/projects'>Projects</Link></Items>
      <Items><Link to='/experience'>Experience</Link></Items>
    </Navigator>
  );
};

export default Header;

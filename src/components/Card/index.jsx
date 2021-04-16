import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5%;
  padding: 2px 16px;
  margin: 5px 10px;
  color: ${({ theme }) => theme.text};
  text-align: center;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export default Card;

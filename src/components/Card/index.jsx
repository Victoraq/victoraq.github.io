import styled from "styled-components";
import { Paragraph } from "../../UI";

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5%;
  padding: 5px 5px;
  margin: 5px 10px;
  width: 30%;
  color: ${({ theme }) => theme.text};
  text-align: center;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 800px) {
    width: auto;
  }
`;

export const CardHeader = styled.header`
  font-weight: 500;
  text-align: center;
  margin: 15px;
`;

export const CardParagraph = styled(Paragraph)`
  margin: 16px;
  font-weight: 300;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

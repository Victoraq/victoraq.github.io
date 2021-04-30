import styled from "styled-components"

export const Content = styled.div`
    margin: 0 100px;
    width: auto;
    height: 100vh;
    background-color: ${({ theme }) => theme.content};
    padding: 25px;
    transition: 0.3s;

    @media (max-width: 800px) {
      margin: 0 5%;
    height: 100%;
    }
`
export const Paragraph = styled.p`
  color: ${({ theme }) => theme.text};
  text-align: left;
`;

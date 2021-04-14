import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;

    html { 
        height: 100%;
    }

    body {
        height: 100%;
        background: ${({ theme }) => theme.body};
    }
`;

export default GlobalStyle;

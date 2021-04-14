import styled from "styled-components"

export const Content = styled.div`
    margin: 0 100px;
    width: auto;
    height: 60vh;
    background-color: ${({ theme }) => theme.content};
    padding: 25px;
`
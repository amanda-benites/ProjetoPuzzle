import styled from "styled-components";
import { ButtonHeaderContainer } from "../home_header/style";

export const ScreenHeaderContainer = styled.header`
    width: 100vw;
    height: 8vh;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 5vw;
    gap: 20vw;

    border-bottom: 1px lightgray solid;
`

export const ScreenButtonHeader= styled(ButtonHeaderContainer)`
    
`

export const ImgButtonBack = styled.img`
    width: 5vw;
`
